import { site } from '../dados/site'
import { TextoAnimado } from '../componentes/animacao/TextoAnimado'
import { FadeIn } from '../componentes/animacao/FadeIn'
import { BotaoContato } from '../componentes/projeto/BotaoContato'

const textoSobre =
  'Analista de TI na L.A Custom. Sistemas em produção, sites para clientes reais e projetos voluntários na igreja. React, Firebase, Supabase — foco em entregar o que a operação precisa.'

export function SecaoSobre() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-[80vh] flex-col items-center justify-center bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2
            className="text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'var(--heading-display)' }}
          >
            <span className="hero-heading">Sobre </span>
            <span className="lucas-accent-heading">mim</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
          <TextoAnimado texto={textoSobre} />
          <p className="max-w-xl text-center text-sm text-[#D7E2EA]/50">{site.formacao}</p>
          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-cyan/40 px-4 py-1.5 text-sm text-cyan">
              {site.cargo}
            </span>
            <span className="rounded-full border border-purple/40 px-4 py-1.5 text-sm text-purple">
              {site.empresa}
            </span>
            <span className="rounded-full border border-neon/30 px-4 py-1.5 text-sm text-neon">
              Lucasweb
            </span>
          </FadeIn>
          <BotaoContato />
        </div>
      </div>
    </section>
  )
}
