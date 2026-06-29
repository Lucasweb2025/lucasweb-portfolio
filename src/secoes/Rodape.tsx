import { site, urlWhatsapp } from '../dados/site'
import { FadeIn } from '../componentes/animacao/FadeIn'

export function SecaoRodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0C0C0C] py-8">
      <FadeIn className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[#D7E2EA]/60 sm:flex-row sm:px-8 md:px-10">
        <p>
          © {ano} {site.nomeCompleto} · {site.nome}
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <a href={urlWhatsapp()} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan">
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
      </FadeIn>
    </footer>
  )
}
