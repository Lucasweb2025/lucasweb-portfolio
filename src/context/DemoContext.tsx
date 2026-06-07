import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { DemoModal } from '../components/DemoModal'
import type { DemoId } from '../demo/types'

type DemoContextValue = {
  openDemo: (id: DemoId) => void
  closeDemo: () => void
}

const DemoContext = createContext<DemoContextValue | null>(null)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [activeDemo, setActiveDemo] = useState<DemoId | null>(null)

  const openDemo = useCallback((id: DemoId) => setActiveDemo(id), [])
  const closeDemo = useCallback(() => setActiveDemo(null), [])

  return (
    <DemoContext.Provider value={{ openDemo, closeDemo }}>
      {children}
      <DemoModal open={activeDemo === 'torre'} onClose={closeDemo} />
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const ctx = useContext(DemoContext)
  if (!ctx) throw new Error('useDemo must be used within DemoProvider')
  return ctx
}
