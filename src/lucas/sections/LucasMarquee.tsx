import { useEffect, useRef, useState } from 'react'
import { lucasMarqueeRow1, lucasMarqueeRow2, type LucasMarqueeItem } from '../data/marquee'

function tripleItems<T>(items: T[]) {
  return [...items, ...items, ...items]
}

function MarqueeTile({ item }: { item: LucasMarqueeItem }) {
  return (
    <div
      className={`lucas-card relative flex h-[270px] w-[420px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-6 bg-linear-to-br ${item.gradient}`}
    >
      <div className="absolute inset-0 bg-[#0C0C0C]/55" />
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">{item.label}</p>
        <h3 className="mt-2 text-2xl font-bold uppercase text-[#D7E2EA]">{item.title}</h3>
      </div>
      {item.stat && (
        <span className="relative z-10 w-fit rounded-full border border-cyan/30 px-3 py-1 font-mono text-xs text-cyan">
          {item.stat}
        </span>
      )}
    </div>
  )
}

function MarqueeRow({
  items,
  direction,
  offset,
}: {
  items: LucasMarqueeItem[]
  direction: 'left' | 'right'
  offset: number
}) {
  const tiles = tripleItems(items)
  const translateX = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
    >
      {tiles.map((item, index) => (
        <MarqueeTile key={`${item.id}-${index}`} item={item} />
      ))}
    </div>
  )
}

export function LucasMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40">
      <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan/80">
        Projetos no ar · L.A Custom & clientes reais
      </p>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={lucasMarqueeRow1} direction="right" offset={offset} />
        <MarqueeRow items={lucasMarqueeRow2} direction="left" offset={offset} />
      </div>
    </section>
  )
}
