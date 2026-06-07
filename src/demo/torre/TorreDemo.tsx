import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core'
import { useState, type ReactNode } from 'react'
import { BoxSlot } from './BoxSlot'
import { BOX_COUNT, BOX_LABELS, initialVehicles, type DemoVehicle } from './mockData'
import { VehicleCard } from './VehicleCard'

function QueueZone({ children, isOver }: { children: ReactNode; isOver: boolean }) {
  const { setNodeRef, isOver: dropOver } = useDroppable({ id: 'queue' })
  const highlighted = isOver || dropOver

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[140px] rounded-xl border p-3 transition ${
        highlighted ? 'border-cyan/50 bg-cyan/5' : 'border-white/10 bg-bg-elevated/80'
      }`}
    >
      {children}
    </div>
  )
}

function VehicleDetailPanel({
  vehicle,
  onClose,
}: {
  vehicle: DemoVehicle
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm">
      <div
        className="glow-border w-full max-w-md rounded-2xl bg-bg-card p-6 ring-1 ring-white/10"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-cyan">OS #{vehicle.os}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{vehicle.model}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 px-2 py-1 text-muted transition hover:text-white"
            aria-label="Fechar detalhes"
          >
            ✕
          </button>
        </div>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-muted">Placa</dt>
            <dd className="font-mono text-white">{vehicle.plate}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-muted">Cliente</dt>
            <dd className="text-white">{vehicle.client}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-muted">Serviço</dt>
            <dd className="text-right text-white">{vehicle.service}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Previsão</dt>
            <dd className="text-white">{vehicle.eta}</dd>
          </div>
          {vehicle.boxId && (
            <div className="flex justify-between gap-4 pt-1">
              <dt className="text-muted">Box</dt>
              <dd className="text-purple">{BOX_LABELS[vehicle.boxId - 1]}</dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-xs text-muted">Dados fictícios — simulação demonstrativa.</p>
      </div>
    </div>
  )
}

export function TorreDemo() {
  const [vehicles, setVehicles] = useState<DemoVehicle[]>(() =>
    initialVehicles.map((v) => ({ ...v })),
  )
  const [activeId, setActiveId] = useState<string | null>(null)
  const [selected, setSelected] = useState<DemoVehicle | null>(null)
  const [overId, setOverId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 6 } }),
  )

  const waiting = vehicles.filter((v) => v.boxId === null)
  const activeVehicle = activeId ? vehicles.find((v) => v.id === activeId) : null

  function handleDragStart(event: DragStartEvent) {
    setActiveId(String(event.active.id))
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)
    setOverId(null)

    if (!over) return

    const vehicleId = String(active.id)
    const overStr = String(over.id)

    setVehicles((prev) => {
      const next = prev.map((v) => ({ ...v }))
      const vehicle = next.find((v) => v.id === vehicleId)
      if (!vehicle) return prev

      if (overStr === 'queue') {
        vehicle.boxId = null
        return next
      }

      if (overStr.startsWith('box-')) {
        const boxNum = Number(overStr.replace('box-', ''))
        const occupant = next.find((v) => v.boxId === boxNum && v.id !== vehicleId)
        if (occupant) return prev
        vehicle.boxId = boxNum
        return next
      }

      return prev
    })
  }

  function resetDemo() {
    setVehicles(initialVehicles.map((v) => ({ ...v })))
    setSelected(null)
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => setOverId(e.over ? String(e.over.id) : null)}
    >
      <div className="flex h-full flex-col">
        <header className="shrink-0 border-b border-white/10 bg-bg-elevated/90 px-4 py-3 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-cyan">SIMULAÇÃO · DADOS FICTÍCIOS</p>
              <h2 className="text-lg font-bold text-white md:text-xl">L.A CUSTOM · Torre de Controle</h2>
            </div>
            <button
              type="button"
              onClick={resetDemo}
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-muted transition hover:border-cyan/40 hover:text-cyan"
            >
              Reiniciar demo
            </button>
          </div>
          <p className="mt-2 text-xs text-muted md:text-sm">
            Arraste veículos da fila para os boxes. Clique em um card para ver detalhes da OS.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-cyan">
                Aguardando triagem
              </h3>
              <QueueZone isOver={overId === 'queue'}>
                {waiting.length === 0 ? (
                  <p className="py-8 text-center text-sm text-muted">
                    Fila vazia — arraste de um box de volta aqui
                  </p>
                ) : (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {waiting.map((vehicle) => (
                      <VehicleCard
                        key={vehicle.id}
                        vehicle={vehicle}
                        onSelect={setSelected}
                      />
                    ))}
                  </div>
                )}
              </QueueZone>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-purple">
                Boxes de triagem
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: BOX_COUNT }, (_, i) => {
                  const boxId = i + 1
                  const vehicle = vehicles.find((v) => v.boxId === boxId) ?? null
                  return (
                    <BoxSlot
                      key={boxId}
                      boxId={boxId}
                      label={BOX_LABELS[i]}
                      vehicle={vehicle}
                      onSelect={setSelected}
                      isOver={overId === `box-${boxId}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeVehicle ? (
          <div className="w-48 rotate-2 opacity-95">
            <VehicleCard vehicle={activeVehicle} onSelect={() => {}} compact />
          </div>
        ) : null}
      </DragOverlay>

      {selected && (
        <VehicleDetailPanel vehicle={selected} onClose={() => setSelected(null)} />
      )}
    </DndContext>
  )
}
