import { ScrollReveal } from './ScrollReveal'

type SectionHeadingProps = {
  id?: string
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ id, label, title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal id={id} className="mb-12 scroll-mt-28 md:scroll-mt-32" variant="up">
      <p className="mb-2 font-mono text-sm tracking-widest text-cyan uppercase">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </ScrollReveal>
  )
}
