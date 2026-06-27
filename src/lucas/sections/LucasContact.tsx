import { site, whatsappUrl } from '../../data/site'
import { StaggerReveal } from '../../components/ScrollReveal'
import { staggerItem } from '../../lib/scrollMotion'
import { motion } from 'framer-motion'
import { FadeIn } from '../../jack/components/FadeIn'
import { LucasContactButton } from '../components/LucasContactButton'

const channels = [
  { name: 'WhatsApp', detail: site.whatsappDisplay, href: whatsappUrl(), primary: true },
  { name: 'LinkedIn', detail: site.fullName, href: site.linkedin, primary: false },
  { name: 'GitHub', detail: 'Lucasweb2025', href: site.github, primary: false },
  { name: 'Instagram', detail: site.instagramHandle, href: site.instagram, primary: false },
] as const

export function LucasContact() {
  return (
    <section
      id="contato"
      className="bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10 md:py-20"
    >
      <FadeIn y={40} className="mb-12 text-center">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan">Contato</p>
        <h2
          className="font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'var(--heading-display)' }}
        >
          <span className="hero-heading">Vamos </span>
          <span className="lucas-accent-heading">conversar?</span>
        </h2>
      </FadeIn>

      <StaggerReveal className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <motion.a
            key={channel.name}
            variants={staggerItem}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col rounded-2xl border-2 p-5 transition hover:-translate-y-0.5 ${
              channel.primary
                ? 'border-cyan/40 bg-cyan/5'
                : 'border-[#D7E2EA]/20 bg-white/5'
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cyan">{channel.name}</span>
            <span className="mt-2 text-sm font-medium text-[#D7E2EA]">{channel.detail}</span>
            <span className="mt-3 text-xs text-[#D7E2EA]/50">Clique para abrir →</span>
          </motion.a>
        ))}
      </StaggerReveal>

      <FadeIn delay={0.2} className="mt-12 flex justify-center">
        <LucasContactButton label="WhatsApp direto" />
      </FadeIn>
    </section>
  )
}
