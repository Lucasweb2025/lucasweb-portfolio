import { motion } from 'framer-motion'
import { ParticleBackground } from '../components/ParticleBackground'
import { site } from '../data/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <ParticleBackground />

      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-purple/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_auto] md:items-center md:px-6 md:py-24">
        <div>
          <motion.p
            className="mb-4 font-mono text-sm text-cyan"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {site.role} · {site.company}
          </motion.p>

          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Olá, sou <span className="gradient-text">{site.name}</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projetos"
              className="rounded-full bg-linear-to-r from-cyan to-purple px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan/50 hover:text-cyan"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative">
            <div className="glow-border overflow-hidden rounded-3xl p-1 ring-1 ring-white/10">
              <img
                src={site.photo}
                alt="Lucas — Lucasweb"
                className="h-56 w-56 rounded-[1.35rem] object-cover object-[center_20%] md:h-64 md:w-64"
              />
            </div>
            <motion.img
              src={site.logo}
              alt="Logo LW"
              className="absolute -bottom-4 -right-4 h-16 w-16 rounded-xl bg-bg p-1.5 shadow-lg ring-1 ring-cyan/30 md:h-20 md:w-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-cyan"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Rolar para sobre"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  )
}
