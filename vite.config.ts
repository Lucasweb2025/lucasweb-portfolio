import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Altere `base` para o nome do repositório no GitHub Pages (ex: /lucasweb-portfolio/)
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/lucasweb-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
