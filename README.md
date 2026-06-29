# Lucasweb — Portfólio

Site portfólio profissional em React + Vite + Tailwind + Framer Motion.

**Live:** [lucasweb2025.github.io/lucasweb-portfolio](https://lucasweb2025.github.io/lucasweb-portfolio/)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. **Settings → Pages → Source:** Deploy from a branch → `main` → **`/ (root)`**
2. Cada push em `main` (exceto commits `deploy:`) roda o workflow e atualiza o build na raiz
3. Site: **https://lucasweb2025.github.io/lucasweb-portfolio/**
4. Desenvolvimento local: `npm run dev` (restaura `index.dev.html` automaticamente)

## Estrutura do código

```
src/
  paginas/       # Página principal
  secoes/        # Hero, Sobre, Projetos, Contato…
  componentes/   # UI reutilizável e demo Torre
  dados/         # Textos, projetos, serviços
  estilos/       # CSS global e tema
```

## Personalizar

- **WhatsApp / contato:** `src/dados/site.ts`
- **Projetos:** `src/dados/projetos.ts`
- **Serviços:** `src/dados/servicos.ts`
