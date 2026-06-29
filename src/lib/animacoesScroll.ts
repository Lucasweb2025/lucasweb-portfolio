import type { Transition, Variants, ViewportOptions } from 'framer-motion'

export const scrollViewport: ViewportOptions = {
  once: true,
  margin: '-72px',
  amount: 0.15,
}

export const scrollTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: scrollTransition },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: scrollTransition },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: scrollTransition },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: scrollTransition },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: scrollTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
}

export type ScrollVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

export const scrollVariants: Record<ScrollVariant, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  fade: fadeIn,
}

export function staggerContainer(stagger = 0.09, delayChildren = 0.06): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }
}

export const itemEscalonado: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: scrollTransition },
}

/** @deprecated use itemEscalonado */
export const staggerItem = itemEscalonado
