import { useEffect, useRef, useState } from 'react'
import {
  linhaCarrossel1,
  linhaCarrossel2,
  linhaCarrossel3,
  type ItemCarrossel,
} from '../dados/carrossel'

function triplicarItens<T>(itens: T[]) {
  return [...itens, ...itens, ...itens]
}

function CardCarrossel({ item }: { item: ItemCarrossel }) {
  return (
    <div
      className={`lucas-card relative flex h-[200px] w-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl sm:h-[220px] sm:w-[340px] md:h-[240px] md:w-[360px] bg-linear-to-br ${item.gradiente}`}
    >
      {item.imagem ? (
        <img
          src={item.imagem}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-[#0C0C0C]/20" />
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">{item.rotulo}</p>
          <h3 className="mt-2 text-lg font-bold uppercase text-[#D7E2EA] sm:text-xl">{item.titulo}</h3>
        </div>
        {item.destaque && (
          <span className="w-fit rounded-full border border-cyan/30 bg-[#0C0C0C]/60 px-3 py-1 font-mono text-xs text-cyan backdrop-blur-sm">
            {item.destaque}
          </span>
        )}
      </div>
    </div>
  )
}

function LinhaCarrossel({
  itens,
  direcao,
  deslocamento,
}: {
  itens: ItemCarrossel[]
  direcao: 'esquerda' | 'direita'
  deslocamento: number
}) {
  const cards = triplicarItens(itens)
  const translateX = direcao === 'direita' ? deslocamento - 200 : -(deslocamento - 200)

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
    >
      {cards.map((item, index) => (
        <CardCarrossel key={`${item.id}-${index}`} item={item} />
      ))}
    </div>
  )
}

export function SecaoCarrossel() {
  const refSecao = useRef<HTMLElement>(null)
  const [deslocamento, setDeslocamento] = useState(0)

  useEffect(() => {
    const aoRolar = () => {
      const secao = refSecao.current
      if (!secao) return
      const topoSecao = secao.getBoundingClientRect().top + window.scrollY
      setDeslocamento((window.scrollY - topoSecao + window.innerHeight) * 0.3)
    }

    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <section ref={refSecao} className="overflow-x-clip bg-[#0C0C0C] pt-16 pb-8 sm:pt-20 md:pt-24">
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan/80">
        Projetos no ar · clientes reais, L.A Custom & pipeline
      </p>
      <div className="flex flex-col gap-3">
        <LinhaCarrossel itens={linhaCarrossel1} direcao="direita" deslocamento={deslocamento} />
        <LinhaCarrossel itens={linhaCarrossel2} direcao="esquerda" deslocamento={deslocamento} />
        <LinhaCarrossel itens={linhaCarrossel3} direcao="direita" deslocamento={deslocamento} />
      </div>
    </section>
  )
}
