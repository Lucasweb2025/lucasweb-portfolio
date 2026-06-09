import { motion } from 'framer-motion'
import { useDemo } from '../context/DemoContext'
import type { Project } from '../data/projects'
import { staggerItem } from '../lib/scrollMotion'

type ProjectCardProps = {
  project: Project
  index: number
  compact?: boolean
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.996 8.996 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function ProjectCard({ project, index: _index, compact = false }: ProjectCardProps) {
  const { openDemo } = useDemo()

  return (
    <motion.article
      variants={staggerItem}
      className={`glow-border group flex flex-col overflow-hidden rounded-2xl bg-bg-card ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] ${
        compact ? 'opacity-90' : ''
      } ${project.wip ? 'border border-dashed border-white/10' : ''}`}
    >
      <div className={`relative h-40 bg-linear-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-bg-card/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl font-bold text-white/10 transition group-hover:text-white/20">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        {project.badges && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-bg/80 px-2.5 py-0.5 text-xs font-medium text-cyan ring-1 ring-cyan/20 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.stats && project.stats.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-cyan/10 px-2.5 py-0.5 font-mono text-xs font-medium text-cyan ring-1 ring-cyan/20"
              >
                {stat}
              </span>
            ))}
          </div>
        )}

        <div className={`flex flex-wrap gap-2 ${project.stats?.length ? 'mt-3' : 'mt-4'}`}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-purple"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-white/5 pt-4">
          {project.demoId && (
            <button
              type="button"
              onClick={() => openDemo(project.demoId!)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon transition hover:text-white"
            >
              ▶ Experimentar
            </button>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition hover:text-white"
            >
              Ver ao vivo
              <ExternalIcon />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-white"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-sm text-muted">Links em breve</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
