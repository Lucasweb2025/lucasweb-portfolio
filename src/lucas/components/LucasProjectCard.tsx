import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useDemo } from '../../context/DemoContext'
import type { Project } from '../../data/projects'
import { staggerItem } from '../../lib/scrollMotion'

type LucasProjectCardProps = {
  project: Project
  index: number
  compact?: boolean
}

export function LucasProjectCard({ project, index: _index, compact = false }: LucasProjectCardProps) {
  const { openDemo } = useDemo()

  return (
    <motion.article
      variants={staggerItem}
      className={`lucas-card group flex flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] ${
        compact ? 'opacity-95' : ''
      } ${project.wip ? 'border-dashed' : ''}`}
    >
      <div className={`relative h-44 bg-linear-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0C0C0C]/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-5xl font-black text-white/15 transition group-hover:text-cyan/25">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        {project.badges && (
          <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan/25 bg-[#0C0C0C]/70 px-2.5 py-0.5 text-xs font-medium text-cyan backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold uppercase tracking-wide text-[#D7E2EA]">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#D7E2EA]/65">{project.description}</p>

        {project.stats && project.stats.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-cyan/20 px-2.5 py-0.5 font-mono text-xs text-cyan"
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

        <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
          {project.demoId && (
            <button
              type="button"
              onClick={() => openDemo(project.demoId!)}
              className="text-sm font-semibold uppercase tracking-wide text-neon transition hover:text-cyan"
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
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D7E2EA]/50 transition hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.996 8.996 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-sm text-[#D7E2EA]/40">Links em breve</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
