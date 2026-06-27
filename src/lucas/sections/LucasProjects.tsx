import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useDemo } from '../../context/DemoContext'
import { StaggerReveal } from '../../components/ScrollReveal'
import type { Project } from '../../data/projects'
import { clientProjects, laCustomProjects, projectGroups, wipProjects } from '../../data/projects'
import { FadeIn } from '../../jack/components/FadeIn'
import { ScrollReveal } from '../../components/ScrollReveal'
import { LucasLiveButton } from '../components/LucasLiveButton'
import { LucasProjectCard } from '../components/LucasProjectCard'
import { ProjectCover } from '../components/ProjectCover'

const featuredProjects = [
  laCustomProjects[0],
  laCustomProjects[1],
  clientProjects[0],
] as const

function FeaturedCard({
  project,
  index,
  totalCards,
}: {
  project: Project
  index: number
  totalCards: number
}) {
  const { openDemo } = useDemo()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="relative h-[60vh] md:h-[min(70vh,640px)]" style={{ top: `${index * 20}px` }}>
      <motion.article
        className="sticky top-20 rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:top-24 sm:rounded-[40px] sm:p-5 md:rounded-[40px] md:p-6"
        style={{ scale }}
      >
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'var(--heading-section)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                {project.badges?.[1] ?? 'Projeto'}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'var(--heading-sub)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.demoId && (
              <button
                type="button"
                onClick={() => openDemo(project.demoId!)}
                className="inline-flex items-center rounded-full border-2 border-cyan px-6 py-3 text-sm font-medium uppercase tracking-widest text-cyan transition hover:bg-cyan/10"
              >
                ▶ Experimentar
              </button>
            )}
            {project.liveUrl && <LucasLiveButton href={project.liveUrl} />}
          </div>
        </div>

        <ProjectCover
          project={project}
          className="mb-4 h-40 rounded-[32px] sm:h-48 md:h-52 md:rounded-[40px]"
        />
        <p className="max-w-3xl text-sm leading-relaxed text-[#D7E2EA]/80 md:text-base">
          {project.description}
        </p>
        {project.stats && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-cyan/20 px-3 py-1 font-mono text-xs text-cyan"
              >
                {stat}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  )
}

function ProjectGroupBlock({
  title,
  subtitle,
  projects,
  startIndex,
}: {
  title: string
  subtitle: string
  projects: Project[]
  startIndex: number
}) {
  return (
    <div className="mb-16 last:mb-0">
      <ScrollReveal variant="left" className="mb-8 border-l-2 border-cyan/40 pl-4">
        <h3
          className="font-semibold uppercase text-[#D7E2EA]"
          style={{ fontSize: 'var(--heading-sub)' }}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#D7E2EA]/60 md:text-base">{subtitle}</p>
      </ScrollReveal>
      <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <LucasProjectCard key={project.id} project={project} index={startIndex + index} />
        ))}
      </StaggerReveal>
    </div>
  )
}

export function LucasProjects() {
  let cardIndex = 0

  return (
    <>
      <section
        id="projetos"
        className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-24"
      >
        <FadeIn y={40} className="mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'var(--heading-display)' }}
          >
            <span className="hero-heading">Meus </span>
            <span className="lucas-accent-heading">projetos</span>
          </h2>
        </FadeIn>

        <div className="mx-auto mb-16 max-w-6xl">
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={index}
              totalCards={featuredProjects.length}
            />
          ))}
        </div>

        <div className="mx-auto max-w-6xl">
          {projectGroups.map((group) => {
            const block = (
              <ProjectGroupBlock
                key={group.id}
                title={group.title}
                subtitle={group.subtitle}
                projects={group.projects}
                startIndex={cardIndex}
              />
            )
            cardIndex += group.projects.length
            return block
          })}
        </div>
      </section>

      <section
        id="em-andamento"
        className="border-t border-white/5 bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10 md:py-20"
      >
        <FadeIn y={40} className="mb-12">
          <p className="mb-2 text-center font-mono text-sm uppercase tracking-widest text-cyan">Pipeline</p>
          <h3
            className="text-center font-black uppercase text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
          >
            Em andamento
          </h3>
        </FadeIn>
        <StaggerReveal className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wipProjects.map((project, index) => (
            <LucasProjectCard key={project.id} project={project} index={index} compact />
          ))}
        </StaggerReveal>
      </section>
    </>
  )
}
