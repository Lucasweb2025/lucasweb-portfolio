import { urlWhatsapp } from '../../dados/site'

type BotaoContatoProps = {
  className?: string
  rotulo?: string
}

export function BotaoContato({
  className = '',
  rotulo = 'Falar comigo',
}: BotaoContatoProps) {
  return (
    <a
      href={urlWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      className={`lucas-btn-primary inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#0C0C0C] transition hover:brightness-110 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      {rotulo}
    </a>
  )
}
