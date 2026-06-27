import type { Project } from '../../data/projects'
import type { ReactNode } from 'react'

type ProjectCoverProps = {
  project: Project
  className?: string
  imageClassName?: string
  showInitials?: boolean
  children?: ReactNode
}

export function ProjectCover({
  project,
  className = '',
  imageClassName = 'object-cover object-top',
  showInitials = true,
  children,
}: ProjectCoverProps) {
  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${project.gradient} ${className}`}>
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 h-full w-full ${imageClassName}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0C0C0C]/40" />
        </>
      ) : (
        showInitials && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-5xl font-black text-white/15">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )
      )}
      {children}
    </div>
  )
}
