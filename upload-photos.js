require('dotenv').config()
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const fs = require('fs')
const path = require('path')

const PHOTOS_DIR = path.join(__dirname, 'photos-3-001')
const SCRIPT_JS  = path.join(__dirname, 'script.js')
const INDEX_HTML = path.join(__dirname, 'index.html')

const MIME_TYPES = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif',  '.webp': 'image/webp',  '.heic': 'image/heic',
  '.mp4': 'video/mp4',  '.mov': 'video/quicktime', '.webm': 'video/webm',
}

function makeS3() {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  })
}

function readExistingUrls() {
  const script = fs.readFileSync(SCRIPT_JS, 'utf8')
  const match = script.match(/const PHOTO_BLOB_URLS = (\{[\s\S]*?\})/)
  if (!match) return {}
  try { return JSON.parse(match[1]) } catch { return {} }
}

function writeUrlsToScript(urlMap) {
  let script = fs.readFileSync(SCRIPT_JS, 'utf8')
  const mapLiteral = 'const PHOTO_BLOB_URLS = ' + JSON.stringify(urlMap, null, 2)
  script = script.replace(/const PHOTO_BLOB_URLS = \{[\s\S]*?\}/, mapLiteral)
  fs.writeFileSync(SCRIPT_JS, script, 'utf8')
}

function updateIndexHtml(urlMap) {
  let html = fs.readFileSync(INDEX_HTML, 'utf8')
  // Substitui caminhos locais E URLs antigas do Vercel Blob
  for (const [file, url] of Object.entries(urlMap)) {
    html = html.replaceAll(`photos-3-001/${file}`, url)
    // Substitui qualquer URL de blob já existente que aponte para esse arquivo
    html = html.replace(
      new RegExp('https://[^"\']*?/' + file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      url
    )
  }
  fs.writeFileSync(INDEX_HTML, html, 'utf8')
}

async function main() {
  const missing = ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET_NAME', 'R2_PUBLIC_URL']
    .filter(k => !process.env[k])
  if (missing.length) {
    console.error('Variáveis faltando no .env: ' + missing.join(', '))
    process.exit(1)
  }

  const s3 = makeS3()
  const urlMap = readExistingUrls()
  console.log(`URLs já no mapa: ${Object.keys(urlMap).length}`)

  const allFiles = fs.readdirSync(PHOTOS_DIR).filter(f =>
    fs.statSync(path.join(PHOTOS_DIR, f)).isFile()
  )

  const pending = allFiles.filter(f => {
    if (urlMap[f] && urlMap[f].includes(process.env.R2_PUBLIC_URL)) return false // já no R2
    return true
  })

  console.log(`Arquivos a enviar: ${pending.length}\n`)
  let ok = 0, fail = 0

  for (let i = 0; i < pending.length; i++) {
    const file = pending[i]
    const ext = path.extname(file).toLowerCase()
    const contentType = MIME_TYPES[ext] || 'application/octet-stream'
    process.stdout.write(`[${i + 1}/${pending.length}] ${file} ... `)
    try {
      const stream = fs.createReadStream(path.join(PHOTOS_DIR, file))
      await s3.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: `timeline/${file}`,
        Body: stream,
        ContentType: contentType,
      }))
      urlMap[file] = `${process.env.R2_PUBLIC_URL}/timeline/${encodeURIComponent(file)}`
      ok++
      console.log('OK')
      writeUrlsToScript(urlMap) // salva progresso a cada arquivo
    } catch (e) {
      fail++
      console.log(`ERRO: ${e.message}`)
    }
  }

  updateIndexHtml(urlMap)
  console.log(`\nFeito! +${ok} enviados, ${fail} erros.`)
  console.log(`Total no mapa: ${Object.keys(urlMap).length} arquivos.`)
  console.log('\nAgora rode:')
  console.log('  git add script.js index.html')
  console.log('  git commit -m "chore: fotos migradas para Cloudflare R2"')
  console.log('  git push')
}

main().catch(err => { console.error(err); process.exit(1) })
