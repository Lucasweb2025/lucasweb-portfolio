import { site, whatsappUrl } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted md:flex-row md:px-6">
        <p>
          © {year} {site.fullName} · {site.name}
        </p>
        <div className="flex flex-wrap justify-center gap-5 md:justify-end">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan">
            WhatsApp
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan">
            GitHub
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
