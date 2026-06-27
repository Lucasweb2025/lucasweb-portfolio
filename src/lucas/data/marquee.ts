import {
  clientProjects,
  laCustomProjects,
  wipProjects,
  type Project,
} from '../../data/projects'

export type LucasMarqueeItem = {
  id: string
  title: string
  label: string
  gradient: string
  stat?: string
  image?: string
}

function toMarqueeItem(project: Project, label?: string): LucasMarqueeItem {
  return {
    id: project.id,
    title: project.title,
    label: label ?? project.badges?.[1] ?? project.badges?.[0] ?? 'Projeto',
    gradient: project.gradient,
    stat: project.stats?.[0],
    image: project.image,
  }
}

const delivered = [...laCustomProjects, ...clientProjects]

export const lucasMarqueeRow1: LucasMarqueeItem[] = delivered.slice(0, 6).map((p) => toMarqueeItem(p))

export const lucasMarqueeRow2: LucasMarqueeItem[] = [
  ...delivered.slice(6).map((p) => toMarqueeItem(p)),
  ...wipProjects.slice(0, 2).map((p) => toMarqueeItem(p, p.badges?.[0] ?? 'Em andamento')),
]
