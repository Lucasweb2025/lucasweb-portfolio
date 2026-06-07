import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { navLinks, site } from '../data/site'

function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5">
      <img
        src={site.logo}
        alt={`Logo ${site.name}`}
        className="h-9 w-9 rounded-lg object-cover ring-1 ring-cyan/30 transition group-hover:ring-cyan/60"
      />
      <span className="font-semibold tracking-tight text-white">{site.name}</span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 px-4 py-1.5 text-sm text-white transition hover:border-cyan/50 hover:text-cyan sm:inline-block"
          >
            GitHub
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-white/5 bg-bg/95 px-4 py-4 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 text-sm text-muted transition hover:text-cyan"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 text-sm text-cyan"
              >
                GitHub
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
