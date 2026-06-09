import { site } from '../../data/site'
import { AnimatedText } from '../../jack/components/AnimatedText'
import { FadeIn } from '../../jack/components/FadeIn'
import { LucasContactButton } from '../components/LucasContactButton'

const aboutText =
  'Analista de TI na L.A Custom. Sistemas em produção, sites para clientes reais e projetos voluntários na igreja. React, Firebase, Supabase — foco em entregar o que a operação precisa.'

export function LucasAbout() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2
            className="text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            <span className="hero-heading">Sobre </span>
            <span className="lucas-accent-heading">mim</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text={aboutText} />
          <p className="max-w-xl text-center text-sm text-[#D7E2EA]/50">{site.education}</p>
          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-cyan/40 px-4 py-1.5 text-sm text-cyan">
              {site.role}
            </span>
            <span className="rounded-full border border-purple/40 px-4 py-1.5 text-sm text-purple">
              {site.company}
            </span>
            <span className="rounded-full border border-neon/30 px-4 py-1.5 text-sm text-neon">
              Lucasweb
            </span>
          </FadeIn>
          <LucasContactButton />
        </div>
      </div>
    </section>
  )
}
