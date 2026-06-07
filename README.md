# Lucasweb — Portfólio

Site portfólio profissional em React + Vite + Tailwind + Framer Motion.

**Live:** [lucasweb2025.github.io/lucasweb-portfolio](https://lucasweb2025.github.io/lucasweb-portfolio/)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. Repositório: [Lucasweb2025/lucasweb-portfolio](https://github.com/Lucasweb2025/lucasweb-portfolio)
2. **Settings → Pages → Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `gh-pages` · pasta **`/ (root)`** → Save
4. Cada push em `main` roda o workflow e atualiza a branch `gh-pages` (~2 min)

> Se a tela ficar branca, confira se a source **não** está em `main` — tem que ser **`gh-pages`**.

## Personalizar

- **WhatsApp / contato:** `src/data/site.ts`
- **Projetos:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
