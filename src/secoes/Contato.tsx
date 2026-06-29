import { motion } from 'framer-motion'
import { site, urlWhatsapp } from '../dados/site'
import { itemEscalonado } from '../lib/animacoesScroll'
import { FadeIn } from '../componentes/animacao/FadeIn'
import { BotaoContato } from '../componentes/projeto/BotaoContato'
import { RevelacaoEscalonada } from '../componentes/animacao/ScrollReveal'

const canais = [
  { nome: 'WhatsApp', detalhe: site.whatsappExibicao, href: urlWhatsapp(), principal: true },
  { nome: 'LinkedIn', detalhe: site.nomeCompleto, href: site.linkedin, principal: false },
  { nome: 'GitHub', detalhe: 'Lucasweb2025', href: site.github, principal: false },
  { nome: 'Instagram', detalhe: site.instagramUsuario, href: site.instagram, principal: false },
] as const

export function SecaoContato() {
  return (
    <section id="contato" className="bg-[#0C0C0C] px-5 py-16 sm:px-8 md:px-10 md:py-20">
      <FadeIn y={40} className="mb-12 text-center">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan">Contato</p>
        <h2
          className="font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'var(--heading-display)' }}
        >
          <span className="hero-heading">Vamos </span>
          <span className="lucas-accent-heading">conversar?</span>
        </h2>
      </FadeIn>

      <RevelacaoEscalonada className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {canais.map((canal) => (
          <motion.a
            key={canal.nome}
            variants={itemEscalonado}
            href={canal.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col rounded-2xl border-2 p-5 transition hover:-translate-y-0.5 ${
              canal.principal
                ? 'border-cyan/40 bg-cyan/5'
                : 'border-[#D7E2EA]/20 bg-white/5'
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cyan">{canal.nome}</span>
            <span className="mt-2 text-sm font-medium text-[#D7E2EA]">{canal.detalhe}</span>
            <span className="mt-3 text-xs text-[#D7E2EA]/50">Clique para abrir →</span>
          </motion.a>
        ))}
      </RevelacaoEscalonada>

      <FadeIn delay={0.2} className="mt-12 flex justify-center">
        <BotaoContato rotulo="WhatsApp direto" />
      </FadeIn>
    </section>
  )
}
