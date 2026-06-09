import { useEffect, useRef, useState } from 'react'
import { marqueeRow1, marqueeRow2 } from '../data/marquee'

function tripleImages(images: readonly string[]) {
  return [...images, ...images, ...images]
}

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: readonly string[]
  direction: 'left' | 'right'
  offset: number
}) {
  const tiles = tripleImages(images)
  const translateX = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {tiles.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  )
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(nextOffset)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={marqueeRow1} direction="right" offset={offset} />
        <MarqueeRow images={marqueeRow2} direction="left" offset={offset} />
      </div>
    </section>
  )
}
