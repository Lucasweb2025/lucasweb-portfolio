import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useDemo } from '../contextos/ContextoDemo'
import type { Projeto } from '../dados/projetos'
import {
  gruposProjetos,
  projetosDestaque,
  projetosEmAndamento,
} from '../dados/projetos'
import { FadeIn } from '../componentes/animacao/FadeIn'
import { RevelacaoEscalonada, RevelacaoScroll } from '../componentes/animacao/ScrollReveal'
import { BotaoAoVivo } from '../componentes/projeto/BotaoAoVivo'
import { CardProjeto } from '../componentes/projeto/CardProjeto'
import { CapaProjeto } from '../componentes/projeto/CapaProjeto'

function CardDestaque({
  projeto,
  indice,
  totalCards,
}: {
  projeto: Projeto
  indice: number
  totalCards: number
}) {
  const { abrirDemo } = useDemo()
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start'],
  })

  const escalaAlvo = 1 - (totalCards - 1 - indice) * 0.03
  const escala = useTransform(scrollYProgress, [0, 1], [1, escalaAlvo])

  return (
    <div ref={refContainer} className="relative h-[60vh] md:h-[min(70vh,640px)]" style={{ top: `${indice * 20}px` }}>
      <motion.article
        className="sticky top-20 rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:top-24 sm:rounded-[40px] sm:p-5 md:rounded-[40px] md:p-6"
        style={{ scale: escala }}
      >
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'var(--heading-section)' }}
            >
              {String(indice + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                {projeto.etiquetas?.[1] ?? 'Projeto'}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'var(--heading-sub)' }}
              >
                {projeto.titulo}
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {projeto.idDemo && (
              <button
                type="button"
                onClick={() => abrirDemo(projeto.idDemo!)}
                className="inline-flex items-center rounded-full border-2 border-cyan px-6 py-3 text-sm font-medium uppercase tracking-widest text-cyan transition hover:bg-cyan/10"
              >
                ▶ Experimentar
              </button>
            )}
            {projeto.urlAoVivo && <BotaoAoVivo href={projeto.urlAoVivo} />}
          </div>
        </div>

        <CapaProjeto
          projeto={projeto}
          className="mb-4 h-40 rounded-[32px] sm:h-48 md:h-52 md:rounded-[40px]"
        />
        <p className="max-w-3xl text-sm leading-relaxed text-[#D7E2EA]/80 md:text-base">
          {projeto.descricao}
        </p>
        {projeto.destaques && (
          <div className="mt-4 flex flex-wrap gap-2">
            {projeto.destaques.map((destaque) => (
              <span
                key={destaque}
                className="rounded-full border border-cyan/20 px-3 py-1 font-mono text-xs text-cyan"
              >
                {destaque}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  )
}

function BlocoGrupoProjetos({
  titulo,
  subtitulo,
  projetos,
}: {
  titulo: string
  subtitulo: string
  projetos: Projeto[]
}) {
  return (
    <div className="mb-16 last:mb-0">
      <RevelacaoScroll variant="left" className="mb-8 border-l-2 border-cyan/40 pl-4">
        <h3
          className="font-semibold uppercase text-[#D7E2EA]"
          style={{ fontSize: 'var(--heading-sub)' }}
        >
          {titulo}
        </h3>
        <p className="mt-1 text-sm text-[#D7E2EA]/60 md:text-base">{subtitulo}</p>
      </RevelacaoScroll>
      <RevelacaoEscalonada className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.id} projeto={projeto} />
        ))}
      </RevelacaoEscalonada>
    </div>
  )
}

export function SecaoProjetos() {
  return (
    <>
      <section
        id="projetos"
        className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-24"
      >
        <FadeIn y={40} className="mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'var(--heading-display)' }}
          >
            <span className="hero-heading">Meus </span>
            <span className="lucas-accent-heading">projetos</span>
          </h2>
        </FadeIn>

        <div className="mx-auto mb-16 max-w-6xl">
          {projetosDestaque.map((projeto, indice) => (
            <CardDestaque
              key={projeto.id}
              projeto={projeto}
              indice={indice}
              totalCards={projetosDestaque.length}
            />
          ))}
        </div>

        <div className="mx-auto max-w-6xl">
          {gruposProjetos.map((grupo) => (
            <BlocoGrupoProjetos
              key={grupo.id}
              titulo={grupo.titulo}
              subtitulo={grupo.subtitulo}
              projetos={grupo.projetos}
            />
          ))}
        </div>
      </section>

      <section
        id="em-andamento"
        className="border-t border-white/5 bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10 md:py-20"
      >
        <FadeIn y={40} className="mb-12">
          <p className="mb-2 text-center font-mono text-sm uppercase tracking-widest text-cyan">Pipeline</p>
          <h3
            className="text-center font-black uppercase text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
          >
            Em andamento
          </h3>
        </FadeIn>
        <RevelacaoEscalonada className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projetosEmAndamento.map((projeto) => (
            <CardProjeto key={projeto.id} projeto={projeto} compacto />
          ))}
        </RevelacaoEscalonada>
      </section>
    </>
  )
}
