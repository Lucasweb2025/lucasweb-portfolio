import { FadeIn } from '../componentes/animacao/FadeIn'
import { servicos } from '../dados/servicos'

export function SecaoServicos() {
  return (
    <section
      id="servicos"
      className="rounded-t-[40px] bg-white px-5 py-16 sm:rounded-t-[50px] sm:px-8 sm:py-20 md:rounded-t-[60px] md:px-10 md:py-24"
    >
      <h2
        className="mb-12 text-center font-black uppercase text-[#0C0C0C] sm:mb-16 md:mb-20"
        style={{ fontSize: 'var(--heading-display)' }}
      >
        O que <span className="lucas-accent-heading">faço</span>
      </h2>

      <div className="mx-auto max-w-5xl">
        {servicos.map((servico, index) => (
          <FadeIn key={servico.numero} delay={index * 0.1} y={24}>
            <article className="flex flex-col gap-4 border-t border-[rgba(12,12,12,0.15)] py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12">
              <span
                className="shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: 'var(--heading-section)' }}
              >
                {servico.numero}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'var(--heading-sub)' }}
                >
                  {servico.nome}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {servico.descricao}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
        <div className="border-t border-[rgba(12,12,12,0.15)]" />
      </div>
    </section>
  )
}
