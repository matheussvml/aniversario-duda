require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') })

const express = require('express')
const { del } = require('@vercel/blob')
const { handleUpload } = require('@vercel/blob/client')
const path = require('path')
const pool = require('../lib/db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '..')))
}

function requirePin(req, res, next) {
  const pin = req.headers['x-upload-pin'] || req.body?.pin
  if (!process.env.UPLOAD_PIN || pin !== process.env.UPLOAD_PIN) {
    return res.status(401).json({ error: 'PIN incorreto' })
  }
  next()
}

// GET /api/photos
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

// POST /api/upload — client-side upload (arquivo vai direto do browser ao Blob, não passa pela função)
app.post('/api/upload', async (req, res) => {
  try {
    const jsonResponse = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const payload = JSON.parse(clientPayload || '{}')
        if (!process.env.UPLOAD_PIN || payload.pin !== process.env.UPLOAD_PIN) {
          throw new Error('PIN incorreto')
        }
        return {
          allowedContentTypes: [
            'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/heic',
            'video/mp4', 'video/quicktime', 'video/webm',
          ],
          maximumSizeInBytes: 100 * 1024 * 1024,
          tokenPayload: JSON.stringify({
            caption:    (payload.caption || '').slice(0, 500),
            uploadedBy: payload.uploadedBy === 'Duda' ? 'Duda' : 'Matheus',
          }),
        }
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const payload = JSON.parse(tokenPayload || '{}')
        await pool.query(
          'INSERT INTO uploaded_photos (filename, url, caption, uploaded_by) VALUES (?, ?, ?, ?)',
          [blob.pathname, blob.url, payload.caption || '', payload.uploadedBy || 'Matheus']
        )
      },
    })
    return res.json(jsonResponse)
  } catch (e) {
    console.error(e)
    return res.status(400).json({ error: e.message })
  }
})

// DELETE /api/photos/:id
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
