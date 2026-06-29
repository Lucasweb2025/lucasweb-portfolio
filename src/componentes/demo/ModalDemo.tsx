import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'

const DemoTorre = lazy(() =>
  import('./torre/TorreDemo').then((m) => ({ default: m.TorreDemo })),
)

type ModalDemoProps = {
  aberto: boolean
  aoFechar: () => void
}

export function ModalDemo({ aberto, aoFechar }: ModalDemoProps) {
  useEffect(() => {
    if (!aberto) return
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') aoFechar()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = overflowAnterior
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto, aoFechar])

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Simulação Torre de Controle"
        >
          <button
            type="button"
            onClick={aoFechar}
            className="absolute right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-bg/90 text-white backdrop-blur transition hover:border-cyan/50 hover:text-cyan"
            aria-label="Fechar simulação"
          >
            ✕
          </button>

          <Suspense
            fallback={
              <div className="flex flex-1 items-center justify-center">
                <p className="animate-pulse font-mono text-sm text-cyan">Carregando simulação…</p>
              </div>
            }
          >
            <div className="flex h-full min-h-0 flex-1 flex-col pt-2">
              <DemoTorre />
            </div>
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
