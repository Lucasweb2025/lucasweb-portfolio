import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'

const TorreDemo = lazy(() =>
  import('../demo/torre/TorreDemo').then((m) => ({ default: m.TorreDemo })),
)

type DemoModalProps = {
  open: boolean
  onClose: () => void
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
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
            onClick={onClose}
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
              <TorreDemo />
            </div>
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
