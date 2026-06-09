import { motion } from 'framer-motion'
import { ScrollReveal, StaggerReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'
import { staggerItem } from '../lib/scrollMotion'

const badges = [site.role, site.company] as const

export function About() {
  return (
    <section id="sobre" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Sobre"
          title="Quem sou eu"
          subtitle={site.aboutSubtitle}
        />

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <ScrollReveal variant="scale" className="mx-auto shrink-0 md:mx-0">
            <div className="glow-border overflow-hidden rounded-2xl p-1 ring-1 ring-white/10">
              <img
                src={site.photo}
                alt="Lucas Silva Santos"
                className="h-40 w-40 rounded-[0.85rem] object-cover object-[center_20%] md:h-48 md:w-48"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={0.08} className="space-y-4 text-muted leading-relaxed">
            <p className="text-lg text-white">{site.bio}</p>
            <p>{site.education}</p>

            <StaggerReveal className="flex flex-wrap gap-3 pt-2" stagger={0.06}>
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  variants={staggerItem}
                  className={`rounded-full bg-white/5 px-4 py-1.5 text-sm ring-1 ${
                    i === 0 ? 'text-cyan ring-cyan/20' : 'text-purple ring-purple/20'
                  }`}
                >
                  {badge}
                </motion.span>
              ))}
            </StaggerReveal>

            <StaggerReveal className="flex flex-wrap gap-4 pt-4" stagger={0.07}>
              {[
                { label: 'LinkedIn → Lucas Silva Santos', href: site.linkedin },
                { label: 'GitHub → Lucasweb2025', href: site.github },
                { label: `Instagram → ${site.instagramHandle}`, href: site.instagram },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  variants={staggerItem}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white transition hover:text-cyan"
                >
                  {link.label}
                </motion.a>
              ))}
            </StaggerReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
