import { useDemo } from '../context/DemoContext'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'

export function ProjectSimulation() {
  const { openDemo } = useDemo()

  return (
    <section id="simulacao" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Interativo"
          title="Faça uma simulação dos projetos"
          subtitle="Explore uma versão demo do front — dados fictícios, sem conexão com sistemas reais."
        />

        <ScrollReveal
          variant="scale"
          className="glow-border overflow-hidden rounded-3xl bg-linear-to-br from-cyan/10 via-bg-card to-purple/10 ring-1 ring-white/10"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative flex min-h-[220px] flex-col justify-center border-b border-white/5 p-8 md:min-h-[320px] md:border-r md:border-b-0 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">Disponível agora</p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Torre de Controle</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Simule a triagem de veículos na L.A Custom — arraste OS da fila para os{' '}
                <strong className="text-white">6 boxes</strong>, clique para ver detalhes e
                experimente o fluxo operacional.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-muted md:text-sm">
                <li>· Drag & drop de veículos</li>
                <li>· 6 boxes iguais ao sistema</li>
                <li>· Modal de detalhes da OS</li>
              </ul>
              <button
                type="button"
                onClick={() => openDemo('torre')}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-cyan to-purple px-8 py-3.5 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                <span aria-hidden>▶</span>
                Iniciar simulação
              </button>
            </div>

            <div className="relative min-h-[220px] bg-bg-elevated/50 p-6 md:min-h-[320px] md:p-8">
              <p className="mb-3 font-mono text-xs text-muted">Preview da interface</p>
              <div className="grid h-full grid-cols-3 gap-2 opacity-90">
                <div className="col-span-1 space-y-2 rounded-xl border border-white/10 bg-bg/80 p-3">
                  <div className="h-2 w-16 rounded bg-cyan/40" />
                  <div className="h-14 rounded-lg border border-cyan/20 bg-cyan/5" />
                  <div className="h-14 rounded-lg border border-cyan/20 bg-cyan/5" />
                  <div className="h-14 rounded-lg border border-white/5 bg-white/5" />
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-2 content-start">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-20 flex-col items-center justify-center rounded-lg border border-dashed border-purple/30 bg-purple/5"
                    >
                      <span className="font-mono text-[10px] text-muted">Box {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="absolute bottom-4 right-6 text-xs text-muted">Mais simuladores em breve</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
