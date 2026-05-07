require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') })

const express = require('express')
const multer  = require('multer')
const { put, del } = require('@vercel/blob')
const path = require('path')
const pool = require('../lib/db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files when running locally (npm start)
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '..')))
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true)
    } else {
      cb(new Error('Apenas imagens e vídeos são permitidos'))
    }
  }
})

function requirePin(req, res, next) {
  const pin = req.headers['x-upload-pin'] || req.body?.pin
  if (!process.env.UPLOAD_PIN || pin !== process.env.UPLOAD_PIN) {
    return res.status(401).json({ error: 'PIN incorreto' })
  }
  next()
}

// GET /api/photos — retorna todas as fotos enviadas
app.get('/api/photos', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, filename, url, caption, uploaded_by, created_at FROM uploaded_photos ORDER BY created_at DESC'
    )
    res.json(rows)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao buscar fotos' })
  }
})

// POST /api/upload — faz upload de uma foto (exige PIN)
app.post('/api/upload', requirePin, upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' })
  }
  try {
    const ext = path.extname(req.file.originalname)
    const safeName = Date.now() + '-' + Math.random().toString(36).slice(2) + ext

    const blob = await put(safeName, req.file.buffer, {
      access: 'public',
      contentType: req.file.mimetype
    })

    const caption    = (req.body.caption || '').slice(0, 500)
    const uploadedBy = req.body.uploaded_by === 'Duda' ? 'Duda' : 'Matheus'

    await pool.query(
      'INSERT INTO uploaded_photos (filename, url, caption, uploaded_by) VALUES (?, ?, ?, ?)',
      [req.file.originalname, blob.url, caption, uploadedBy]
    )

    res.json({ url: blob.url, caption, uploaded_by: uploadedBy })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao fazer upload: ' + e.message })
  }
})

// DELETE /api/photos/:id — remove uma foto (exige PIN)
app.delete('/api/photos/:id', requirePin, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT url FROM uploaded_photos WHERE id = ?',
      [req.params.id]
    )
    if (!rows.length) {
      return res.status(404).json({ error: 'Foto não encontrada' })
    }
    await del(rows[0].url)
    await pool.query('DELETE FROM uploaded_photos WHERE id = ?', [req.params.id])
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao deletar foto' })
  }
})

if (require.main === module) {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })
}

module.exports = app
