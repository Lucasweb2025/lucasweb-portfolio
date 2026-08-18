import type { CSSProperties } from 'react'
import { FadeIn } from '../componentes/animacao/FadeIn'
import { servicos } from '../dados/servicos'

const acentos = ['var(--color-cyan)', 'var(--color-purple)', 'var(--color-neon)']

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
        {servicos.map((servico, index) => {
          const Icone = servico.icone
          const acento = acentos[index % acentos.length]
          return (
            <FadeIn key={servico.numero} delay={index * 0.1} y={24}>
              <article
                className="group relative flex flex-col gap-4 border-t border-[rgba(12,12,12,0.15)] py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12"
                style={{ '--tag-accent': acento } as CSSProperties}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--tag-accent)] opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                />
                <span
                  className="shrink-0 font-black text-[#0C0C0C] transition-colors duration-300 group-hover:text-[var(--tag-accent)]"
                  style={{ fontSize: 'var(--heading-section)' }}
                >
                  {servico.numero}
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.03] transition-colors duration-300 group-hover:border-[var(--tag-accent)]/40">
                      <Icone
                        className="h-5 w-5 text-[#0C0C0C]/60 transition-colors duration-300 group-hover:text-[var(--tag-accent)]"
                        strokeWidth={1.75}
                      />
                    </span>
                    <h3
                      className="font-medium uppercase text-[#0C0C0C]"
                      style={{ fontSize: 'var(--heading-sub)' }}
                    >
                      {servico.nome}
                    </h3>
                  </div>
                  <p
                    className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {servico.descricao}
                  </p>
                  {servico.tecnologias.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {servico.tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#0C0C0C]/15 bg-[#0C0C0C]/[0.03] px-2.5 py-0.5 font-mono text-xs text-[#0C0C0C]/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          )
        })}
        <div className="border-t border-[rgba(12,12,12,0.15)]" />
      </div>
    </section>
  )
}
