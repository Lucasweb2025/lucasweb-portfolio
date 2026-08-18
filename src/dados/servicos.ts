import type { LucideIcon } from 'lucide-react'
import { Bot, Braces, GraduationCap, Globe, LayoutDashboard, Smartphone } from 'lucide-react'

export type Servico = {
  numero: string
  nome: string
  descricao: string
  icone: LucideIcon
  tecnologias: string[]
}

export const servicos: Servico[] = [
  {
    numero: '01',
    nome: 'Sistemas internos',
    descricao:
      'Painéis operacionais, checklists e controle de ativos — como a Torre de Controle, Performance Premium e o Controle de Equipamentos na L.A Custom, em uso todos os dias.',
    icone: LayoutDashboard,
    tecnologias: ['Firebase', 'React', 'PWA'],
  },
  {
    numero: '02',
    nome: 'Sites & sistemas para clientes',
    descricao:
      'Sites completos no ar com domínio próprio, agenda online, painel admin e portal de campo — entregas reais como Nathalia Andrade, Global Gesso e A.J Engenharia.',
    icone: Globe,
    tecnologias: ['Next.js', 'Supabase', 'Painel admin'],
  },
  {
    numero: '03',
    nome: 'React, Next.js & backend',
    descricao:
      'Apps web modernos com React, Next.js, Vite, Tailwind, Firebase e Supabase — dados em tempo real, autenticação, deploy na Vercel e arquivos no Cloudflare R2.',
    icone: Braces,
    tecnologias: ['React', 'Next.js', 'Firebase', 'Supabase'],
  },
  {
    numero: '04',
    nome: 'PWA & apps mobile',
    descricao:
      'Experiências instaláveis na tela inicial e apps nativos com Capacitor — como Mercadinho do Filipi e Mercadinho do Leblon — além de APKs em teste para equipes de campo.',
    icone: Smartphone,
    tecnologias: ['PWA', 'Capacitor', 'Mobile'],
  },
  {
    numero: '05',
    nome: 'Automação com IA',
    descricao:
      'Assistentes de IA integrados ao produto, como a "Chloe" no Focus & Flow com a API do Gemini, para organizar tarefas e conversar com o usuário.',
    icone: Bot,
    tecnologias: ['Gemini API', 'IA'],
  },
  {
    numero: '06',
    nome: 'Canvas LMS & Igreja',
    descricao:
      'Conteúdo digital, módulos e trilhas no Canvas LMS — trabalho voluntário de apoio tecnológico na comunidade.',
    icone: GraduationCap,
    tecnologias: ['Canvas LMS', 'Voluntariado'],
  },
]
