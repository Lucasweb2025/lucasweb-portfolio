import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { ModalDemo } from '../componentes/demo/ModalDemo'
import type { IdDemo } from '../tipos/demo'

type ValorContextoDemo = {
  abrirDemo: (id: IdDemo) => void
  fecharDemo: () => void
}

const ContextoDemo = createContext<ValorContextoDemo | null>(null)

export function ProvedorDemo({ children }: { children: ReactNode }) {
  const [demoAtivo, setDemoAtivo] = useState<IdDemo | null>(null)

  const abrirDemo = useCallback((id: IdDemo) => setDemoAtivo(id), [])
  const fecharDemo = useCallback(() => setDemoAtivo(null), [])

  return (
    <ContextoDemo.Provider value={{ abrirDemo, fecharDemo }}>
      {children}
      <ModalDemo aberto={demoAtivo === 'torre'} aoFechar={fecharDemo} />
    </ContextoDemo.Provider>
  )
}

export function useDemo() {
  const ctx = useContext(ContextoDemo)
  if (!ctx) throw new Error('useDemo deve ser usado dentro de ProvedorDemo')
  return ctx
}
