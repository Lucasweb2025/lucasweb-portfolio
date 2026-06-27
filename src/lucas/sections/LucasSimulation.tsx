import { useDemo } from '../../context/DemoContext'
import { FadeIn } from '../../jack/components/FadeIn'

export function LucasSimulation() {
  const { openDemo } = useDemo()

  return (
    <section id="simulacao" className="border-t border-white/5 bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <FadeIn y={40} className="mb-10 text-center">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan">Interativo</p>
        <h2
          className="font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'var(--heading-display)' }}
        >
          <span className="hero-heading">Torre de </span>
          <span className="lucas-accent-heading">controle</span>
        </h2>
      </FadeIn>

      <FadeIn y={30} className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-linear-to-br from-cyan/10 via-[#0C0C0C] to-purple/10 sm:rounded-[50px] md:rounded-[60px]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-white/10 p-8 md:border-r md:border-b-0 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">Disponível agora</p>
            <h3 className="mt-2 text-2xl font-bold uppercase text-[#D7E2EA] md:text-3xl">Torre de Controle</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#D7E2EA]/70 md:text-base">
              Arraste OS da fila para os 6 boxes, clique para ver detalhes e experimente o fluxo operacional da L.A Custom.
            </p>
            <button
              type="button"
              onClick={() => openDemo('torre')}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-cyan px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-cyan transition hover:bg-cyan/10"
            >
              ▶ Iniciar simulação
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 p-6 md:p-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-purple/30 bg-purple/5"
              >
                <span className="font-mono text-[10px] text-[#D7E2EA]/50">Box {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
