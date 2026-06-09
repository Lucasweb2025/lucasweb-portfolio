import { motion } from 'framer-motion'
import { ScrollReveal, StaggerReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { site, whatsappUrl } from '../data/site'
import { staggerItem } from '../lib/scrollMotion'

const channels = [
  {
    name: 'WhatsApp',
    detail: site.whatsappDisplay,
    href: whatsappUrl(),
    primary: true,
    external: true,
  },
  {
    name: 'LinkedIn',
    detail: site.fullName,
    href: site.linkedin,
    primary: false,
    external: true,
  },
  {
    name: 'GitHub',
    detail: 'Lucasweb2025',
    href: site.github,
    primary: false,
    external: true,
  },
  {
    name: 'Instagram',
    detail: site.instagramHandle,
    href: site.instagram,
    primary: false,
    external: true,
  },
] as const

export function Contact() {
  return (
    <section id="contato" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Contato"
          title="Vamos conversar?"
          subtitle="Aberto a projetos web, sistemas internos, freelas e parcerias."
        />

        <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <motion.a
              key={channel.name}
              variants={staggerItem}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glow-border flex flex-col rounded-2xl p-5 ring-1 ring-white/5 transition hover:-translate-y-0.5 ${
                channel.primary ? 'bg-linear-to-br from-neon/10 to-cyan/5' : 'bg-bg-card'
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-cyan">{channel.name}</span>
              <span className="mt-2 text-sm font-medium text-white">{channel.detail}</span>
              <span className="mt-3 text-xs text-muted">Clique para abrir →</span>
            </motion.a>
          ))}
        </StaggerReveal>

        <ScrollReveal variant="fade" delay={0.15} className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          Respondo por WhatsApp e LinkedIn. Para ver código e repos, acesse o GitHub.
        </ScrollReveal>
      </div>
    </section>
  )
}
