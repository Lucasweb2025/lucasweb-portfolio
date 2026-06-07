import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projectGroups, wipProjects } from '../data/projects'

function ProjectGroupBlock({
  title,
  subtitle,
  projects,
  startIndex,
}: {
  title: string
  subtitle: string
  projects: (typeof projectGroups)[number]['projects']
  startIndex: number
}) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8 border-l-2 border-cyan/40 pl-4">
        <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
        <p className="mt-1 text-sm text-muted md:text-base">{subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={startIndex + index} />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  let cardIndex = 0

  return (
    <>
      <section id="projetos" className="border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            label="Portfólio"
            title="Projetos entregues"
            subtitle="L.A Custom, clientes reais e projetos voluntários na igreja — tudo no ar ou em uso."
          />

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

      <section id="em-andamento" className="border-t border-white/5 bg-bg-elevated/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            label="Pipeline"
            title="Em andamento"
            subtitle="Demos, frontends prontos e apps em teste — próximas entregas."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wipProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
