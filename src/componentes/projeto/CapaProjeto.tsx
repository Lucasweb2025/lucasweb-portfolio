import { useEffect, useState } from 'react'
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
  const imagens = projeto.imagens ?? (projeto.imagem ? [projeto.imagem] : [])
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    setIndice(0)
  }, [projeto.id])

  useEffect(() => {
    if (imagens.length <= 1) return
    const timer = window.setInterval(() => {
      setIndice((atual) => (atual + 1) % imagens.length)
    }, 3500)
    return () => window.clearInterval(timer)
  }, [imagens])

  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${projeto.gradiente} ${className}`}>
      {imagens.length > 0 ? (
        <>
          {imagens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={projeto.titulo}
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${classeImagem} ${
                i === indice ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          ))}
          <div className="absolute inset-0 bg-[#0C0C0C]/40" />
          {imagens.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {imagens.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Foto ${i + 1}`}
                  onClick={() => setIndice(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === indice ? 'w-5 bg-cyan' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
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
