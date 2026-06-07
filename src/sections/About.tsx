import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'

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
          <motion.div
            className="mx-auto shrink-0 md:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="glow-border overflow-hidden rounded-2xl p-1 ring-1 ring-white/10">
              <img
                src={site.photo}
                alt="Lucas Silva Santos"
                className="h-40 w-40 rounded-[0.85rem] object-cover object-[center_20%] md:h-48 md:w-48"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 text-muted leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-white">{site.bio}</p>
            <p>{site.education}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-cyan ring-1 ring-cyan/20">
                {site.role}
              </span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-purple ring-1 ring-purple/20">
                {site.company}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white transition hover:text-cyan"
              >
                LinkedIn → Lucas Silva Santos
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white transition hover:text-cyan"
              >
                GitHub → Lucasweb2025
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white transition hover:text-cyan"
              >
                Instagram → {site.instagramHandle}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
