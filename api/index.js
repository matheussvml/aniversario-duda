require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') })

const express = require('express')
const { S3Client, DeleteObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const path = require('path')
const pool = require('../lib/db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '..')))
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  requestChecksumCalculation: 'WHEN_REQUIRED',
  responseChecksumValidation: 'WHEN_REQUIRED',
})

function requirePin(req, res, next) {
  const pin = req.headers['x-upload-pin'] || req.body?.pin
  if (!process.env.UPLOAD_PIN || pin !== process.env.UPLOAD_PIN) {
    return res.status(401).json({ error: 'PIN incorreto' })
  }
  next()
}

// GET /api/photos
app.get('/api/photos', async (_req, res) => {
  res.set('Cache-Control', 'no-store')
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

// POST /api/photos — salva metadados após upload (exige PIN)
app.post('/api/photos', requirePin, async (req, res) => {
  const { url, filename, caption, uploaded_by } = req.body
  if (!url) return res.status(400).json({ error: 'URL obrigatória' })
  try {
    await pool.query(
      'INSERT INTO uploaded_photos (filename, url, caption, uploaded_by) VALUES (?, ?, ?, ?)',
      [filename || url, url, (caption || '').slice(0, 500), uploaded_by === 'Duda' ? 'Duda' : 'Matheus']
    )
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao salvar foto' })
  }
})

// POST /api/upload — gera presigned URL para upload direto ao R2 (exige PIN)
app.post('/api/upload', requirePin, async (req, res) => {
  const { filename, contentType } = req.body
  if (!filename || !contentType) {
    return res.status(400).json({ error: 'filename e contentType obrigatórios' })
  }
  const key = `uploads/${Date.now()}-${filename}`
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: contentType,
    })
    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 })
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`
    res.json({ presignedUrl, publicUrl })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erro ao gerar URL de upload' })
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
    const key = rows[0].url.replace(`${process.env.R2_PUBLIC_URL}/`, '')
    await s3.send(new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
    }))
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
