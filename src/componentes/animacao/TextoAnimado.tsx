import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'

type TextoAnimadoProps = {
  texto: string
  className?: string
}

function AnimatedChar({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = Math.min(1, (index + 1) / total)
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const display = char === ' ' ? '\u00A0' : char

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  )
}

export function TextoAnimado({ texto, className = '' }: TextoAnimadoProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = useMemo(() => texto.split(''), [texto])

  return (
    <p
      ref={ref}
      className={`mx-auto max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {chars.map((char, index) => (
        <AnimatedChar key={`${char}-${index}`} char={char} index={index} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}
