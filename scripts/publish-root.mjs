import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')

copyFileSync(join(root, 'index.dev.html'), join(root, 'index.html'))

if (!existsSync(dist)) {
  console.error('dist/ not found — run build:pages first')
  process.exit(1)
}

copyFileSync(join(dist, 'index.html'), join(root, 'index.html'))

rmSync(join(root, 'assets'), { recursive: true, force: true })
cpSync(join(dist, 'assets'), join(root, 'assets'), { recursive: true })

mkdirSync(join(root, 'images'), { recursive: true })
if (existsSync(join(dist, 'images'))) {
  cpSync(join(dist, 'images'), join(root, 'images'), { recursive: true })
} else if (existsSync(join(root, 'public', 'images'))) {
  cpSync(join(root, 'public', 'images'), join(root, 'images'), { recursive: true })
}

for (const file of ['.nojekyll', 'favicon.png', 'favicon.svg', 'icons.svg']) {
  const fromDist = join(dist, file)
  if (existsSync(fromDist)) copyFileSync(fromDist, join(root, file))
}

console.log('Published dist/ to repo root for GitHub Pages')
