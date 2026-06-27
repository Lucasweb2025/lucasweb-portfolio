import { mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const puppeteer = require(
  'C:/Users/LucasSantosLACustom/OneDrive - L.A Custom/Documentos/anapaula/node_modules/puppeteer',
)

const outDir = join(process.cwd(), 'public', 'images', 'projects')
mkdirSync(outDir, { recursive: true })

const chromePath =
  process.env.CHROME_PATH ??
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const shots = [
  ['https://lucasweb2025.github.io/torredecontrole/', 'torre.jpg'],
  ['https://campanhalacustom.netlify.app/', 'performance.jpg'],
  ['https://lucasweb2025.github.io/checklist/', 'checklist.jpg'],
  ['https://salaonathaliaandrade.com.br/', 'nathalia.jpg'],
  ['https://lucasweb2025.github.io/allpink/', 'allpink.jpg'],
  ['https://globalgesso.com.br/', 'globalgesso.jpg'],
  ['https://psicologa-anapaula.web.app/', 'anapaula.jpg'],
  ['https://saas-loja-286c0.web.app/', 'vitrine.jpg'],
  ['https://lucasweb2025.github.io/laestoque/', 'laestoque.jpg'],
]

const browser = await puppeteer.launch({
  headless: true,
  executablePath: chromePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const [url, file] of shots) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await page.screenshot({
      path: join(outDir, file),
      type: 'jpeg',
      quality: 82,
    })
    console.log('ok', file)
  } catch (error) {
    console.error('fail', file, error.message)
  } finally {
    await page.close()
  }
}

await browser.close()
