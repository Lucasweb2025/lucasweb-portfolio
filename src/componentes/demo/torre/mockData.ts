export type DemoVehicle = {
  id: string
  os: string
  plate: string
  model: string
  client: string
  service: string
  eta: string
  boxId: number | null
}

export const initialVehicles: DemoVehicle[] = [
  {
    id: 'v1',
    os: '1042',
    plate: 'ABC-1D23',
    model: 'Honda Civic',
    client: 'Maria Silva',
    service: 'PPF Capô + Faróis',
    eta: '12/06/2026',
    boxId: null,
  },
  {
    id: 'v2',
    os: '1043',
    plate: 'FGH-4E56',
    model: 'Hyundai HB20',
    client: 'João Santos',
    service: 'Descontaminação + Película',
    eta: '11/06/2026',
    boxId: null,
  },
  {
    id: 'v3',
    os: '1044',
    plate: 'JKL-7G89',
    model: 'Toyota Corolla',
    client: 'Ana Costa',
    service: 'Vitrificação + Higienização',
    eta: '13/06/2026',
    boxId: null,
  },
  {
    id: 'v4',
    os: '1045',
    plate: 'MNO-0H12',
    model: 'VW T-Cross',
    client: 'Pedro Lima',
    service: 'Film Premium Completo',
    eta: '14/06/2026',
    boxId: null,
  },
]

export const BOX_COUNT = 6

export const BOX_LABELS = [
  'Box 1',
  'Box 2',
  'Box 3',
  'Box 4',
  'Box 5',
  'Box 6',
] as const
