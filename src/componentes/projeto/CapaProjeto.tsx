import type { Projeto } from '../../dados/projetos'
import type { ReactNode } from 'react'

type CapaProjetoProps = {
  projeto: Projeto
  className?: string
  classeImagem?: string
  mostrarIniciais?: boolean
  children?: ReactNode
}

export function CapaProjeto({
  projeto,
  className = '',
  classeImagem = 'object-cover object-top',
  mostrarIniciais = true,
  children,
}: CapaProjetoProps) {
  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${projeto.gradiente} ${className}`}>
      {projeto.imagem ? (
        <>
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className={`absolute inset-0 h-full w-full ${classeImagem}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0C0C0C]/40" />
        </>
      ) : (
        mostrarIniciais && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-5xl font-black text-white/15">
              {projeto.titulo.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )
      )}
      {children}
    </div>
  )
}
