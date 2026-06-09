import { ExternalLink } from 'lucide-react'

type LucasLiveButtonProps = {
  href?: string
  className?: string
}

export function LucasLiveButton({ href = '#', className = '' }: LucasLiveButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-cyan px-8 py-3 text-sm font-medium uppercase tracking-widest text-cyan transition hover:bg-cyan/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      Ver ao vivo
      <ExternalLink className="h-4 w-4" />
    </a>
  )
}
