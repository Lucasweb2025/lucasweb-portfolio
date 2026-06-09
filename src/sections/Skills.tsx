import { motion } from 'framer-motion'
import { StaggerReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'
import { staggerItem } from '../lib/scrollMotion'

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Stack"
          title="Skills & tecnologias"
          subtitle="Ferramentas web, mobile e plataformas como Canvas LMS."
        />

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={staggerItem}
              className="rounded-2xl bg-bg-card p-5 ring-1 ring-white/5"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-cyan">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
