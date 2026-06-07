import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import type { DemoVehicle } from './mockData'

type VehicleCardProps = {
  vehicle: DemoVehicle
  onSelect: (vehicle: DemoVehicle) => void
  compact?: boolean
}

export function VehicleCard({ vehicle, onSelect, compact }: VehicleCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: vehicle.id,
    data: { vehicle },
  })

  const style = transform
    ? { transform: CSS.Translate.toString(transform), zIndex: isDragging ? 50 : undefined }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`cursor-grab rounded-xl border border-cyan/25 bg-bg-card p-3 shadow-lg ring-1 ring-white/5 active:cursor-grabbing ${
        isDragging ? 'opacity-90 shadow-[0_0_24px_rgba(0,245,255,0.25)]' : ''
      } ${compact ? 'p-2' : ''}`}
      {...listeners}
      {...attributes}
    >
      <button
        type="button"
        className="w-full text-left"
        onClick={(e) => {
          e.stopPropagation()
          onSelect(vehicle)
        }}
      >
        <p className="font-mono text-xs text-cyan">OS #{vehicle.os}</p>
        <p className="mt-1 text-sm font-semibold text-white">{vehicle.model}</p>
        <p className="text-xs text-muted">{vehicle.plate}</p>
        {!compact && (
          <p className="mt-2 line-clamp-1 text-xs text-muted">{vehicle.service}</p>
        )}
      </button>
    </div>
  )
}
