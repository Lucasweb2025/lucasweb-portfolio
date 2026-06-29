import { useDroppable } from '@dnd-kit/core'
import type { DemoVehicle } from './mockData'
import { VehicleCard } from './VehicleCard'

type BoxSlotProps = {
  boxId: number
  label: string
  vehicle: DemoVehicle | null
  onSelect: (vehicle: DemoVehicle) => void
  isOver: boolean
}

export function BoxSlot({ boxId, label, vehicle, onSelect, isOver }: BoxSlotProps) {
  const { setNodeRef, isOver: dropOver } = useDroppable({ id: `box-${boxId}` })

  const highlighted = isOver || dropOver

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[120px] flex-col rounded-xl border-2 border-dashed p-2 transition ${
        highlighted
          ? 'border-cyan bg-cyan/10 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
          : vehicle
            ? 'border-purple/40 bg-purple/5'
            : 'border-white/15 bg-white/2'
      }`}
    >
      <span className="mb-2 text-center font-mono text-xs font-medium text-muted">{label}</span>
      {vehicle ? (
        <VehicleCard vehicle={vehicle} onSelect={onSelect} compact />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-xs text-muted/60">Arraste um veículo</p>
        </div>
      )}
    </div>
  )
}
