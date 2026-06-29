import { linksNavegacao, site } from '../dados/site'
import { FadeIn } from '../componentes/animacao/FadeIn'
import { Magnet } from '../componentes/animacao/Magnet'
import { BotaoContato } from '../componentes/projeto/BotaoContato'

export function SecaoInicio() {
  return (
    <section id="inicio" className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn y={-20} className="px-6 pt-6 md:px-10 md:pt-8">
        <div className="flex items-center justify-between gap-6">
          <img src={site.logo} alt="Lucasweb" className="h-10 w-10 rounded-lg ring-1 ring-cyan/30 md:h-12 md:w-12" />
          <nav className="flex flex-1 items-center justify-end gap-4 sm:justify-between sm:gap-0">
            {linksNavegacao.map((link) => (
              <a
                key={link.rotulo}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:text-cyan sm:text-sm md:text-lg lg:text-[1.2rem]"
              >
                {link.rotulo}
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="mx-auto mt-6 w-full max-w-7xl overflow-hidden px-6 sm:mt-4 md:-mt-2 md:px-10">
        <h1
          className="w-full font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'var(--heading-hero)' }}
        >
          <span className="hero-heading">Oi, sou </span>
          <span className="lucas-accent-heading">{site.nome.toLowerCase()}</span>
        </h1>
      </FadeIn>

      <Magnet
        padding={90}
        strength={3}
        className="absolute left-1/2 z-10 w-[200px] -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[260px] md:w-[320px] lg:w-[360px]"
      >
        <FadeIn delay={0.6} y={30}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-cyan/40 via-purple/30 to-transparent blur-md" />
            <img
              src={site.foto}
              alt={site.nomeCompleto}
              className="relative h-auto w-full rounded-2xl object-cover object-[center_20%] ring-2 ring-cyan/30"
            />
          </div>
        </FadeIn>
      </Magnet>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:px-10 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[180px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[280px] md:max-w-[360px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {site.frase}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <BotaoContato />
        </FadeIn>
      </div>
    </section>
  )
}
