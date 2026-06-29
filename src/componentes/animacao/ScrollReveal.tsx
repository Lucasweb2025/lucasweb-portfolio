import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  scrollTransition,
  scrollVariants,
  scrollViewport,
  staggerContainer,
  type ScrollVariant,
} from '../../lib/animacoesScroll'

type ScrollRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  variant?: ScrollVariant
  delay?: number
}

export function RevelacaoScroll({
  children,
  variant = 'up',
  delay = 0,
  className,
  ...props
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()
  const variants = scrollVariants[variant]

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={scrollViewport}
      variants={variants}
      transition={{ ...scrollTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  stagger?: number
  delayChildren?: number
}

export function RevelacaoEscalonada({
  children,
  stagger = 0.09,
  delayChildren = 0.06,
  className,
  ...props
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={scrollViewport}
      variants={staggerContainer(stagger, delayChildren)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
