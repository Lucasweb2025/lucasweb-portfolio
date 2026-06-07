import type { DemoId } from '../demo/types'

export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  stats?: string[]
  liveUrl?: string
  githubUrl?: string
  badges?: string[]
  gradient: string
  wip?: boolean
  demoId?: DemoId
}

export type ProjectGroup = {
  id: string
  title: string
  subtitle: string
}

export const laCustomProjects: Project[] = [
  {
    id: 'torre',
    title: 'Torre de Controle',
    description:
      'Painel operacional usado todo dia na L.A Custom: triagem de veículos em boxes, check-in com fotos, rastreio para o cliente, auditoria e dashboard de entregas.',
    stack: ['JavaScript', 'Firebase', 'PWA'],
    stats: ['Uso diário', 'Check-in/out', 'Modo visitante'],
    liveUrl: 'https://lucasweb2025.github.io/torredecontrole/',
    githubUrl: 'https://github.com/Lucasweb2025/torredecontrole',
    badges: ['Concluído', 'L.A Custom'],
    gradient: 'from-cyan-500/30 via-purple-500/20 to-transparent',
    demoId: 'torre',
  },
  {
    id: 'performance',
    title: 'Performance Premium',
    description:
      'Campanha gamificada de vendas para a rede L.A Custom: consultores lançam contratos, gerentes aprovam, ranking atualiza em tempo real com tiers Bronze → Black.',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    stats: ['7 concessionárias', 'Ranking ao vivo', 'Export CSV'],
    liveUrl: 'https://campanhalacustom.netlify.app/',
    githubUrl: 'https://github.com/Lucasweb2025/la-custom-performance-campanha',
    badges: ['Concluído', 'L.A Custom'],
    gradient: 'from-amber-500/25 via-yellow-500/15 to-transparent',
  },
  {
    id: 'checklist',
    title: 'Check-list Limpeza',
    description:
      'Checklist digital por setor (copa, recepção, banheiros, salas) — equipe de limpeza segue rotinas padronizadas com acesso pelo celular.',
    stack: ['HTML/JS', 'GitHub Pages'],
    stats: ['14 setores', 'Acesso mobile', 'Em uso'],
    liveUrl: 'https://lucasweb2025.github.io/checklist/',
    githubUrl: 'https://github.com/Lucasweb2025/checklist',
    badges: ['Concluído', 'L.A Custom'],
    gradient: 'from-emerald-500/20 via-cyan-500/15 to-transparent',
  },
]

export const clientProjects: Project[] = [
  {
    id: 'nathalia',
    title: 'Nathalia Andrade',
    description:
      'Site completo para salão de beleza em São Paulo: institucional, galeria, agenda online em 3 passos e painel para a proprietária gerenciar horários.',
    stack: ['React', 'Supabase', 'PWA'],
    stats: ['Domínio próprio', 'Agenda online', 'Painel admin'],
    liveUrl: 'https://salaonathaliaandrade.com.br/',
    githubUrl: 'https://github.com/Lucasweb2025/nataliaandrade',
    badges: ['Concluído', 'Cliente real'],
    gradient: 'from-purple-500/30 via-pink-500/20 to-transparent',
  },
  {
    id: 'allpink',
    title: 'All Pink Beauty',
    description:
      'Catálogo mobile para loja de beleza: produtos, carrinho, PWA instalável na tela inicial e pedido montado direto no WhatsApp da loja.',
    stack: ['HTML/JS', 'Firebase', 'GitHub Pages'],
    stats: ['100% mobile', 'Carrinho', 'Pedido WhatsApp'],
    liveUrl: 'https://lucasweb2025.github.io/allpink/',
    githubUrl: 'https://github.com/Lucasweb2025/allpink',
    badges: ['Concluído', 'Cliente real'],
    gradient: 'from-pink-500/30 via-purple-500/20 to-transparent',
  },
]

export const churchProjects: Project[] = [
  {
    id: 'igreja-canvas',
    title: 'Projetos na Igreja',
    description:
      'Criação e gestão de conteúdo digital no Canvas LMS — módulos, materiais e trilhas para a comunidade. Trabalho voluntário de apoio tecnológico ao ministério.',
    stack: ['Canvas LMS', 'Conteúdo digital'],
    stats: ['Voluntariado', 'Módulos e trilhas', 'Canvas LMS'],
    badges: ['Voluntariado', 'Igreja'],
    gradient: 'from-indigo-500/25 via-purple-500/15 to-transparent',
  },
]

export const wipProjects: Project[] = [
  {
    id: 'vitrine',
    title: 'VitrineEngine',
    description:
      'SaaS multi-loja com planos, trial e painel administrativo. Demo funcional — comercialização pendente (domínio e gateway de pagamento).',
    stack: ['HTML/JS', 'Firebase'],
    stats: ['Demo live', 'Multi-loja', 'Planos + trial'],
    liveUrl: 'https://saas-loja-286c0.web.app',
    badges: ['Demo', 'Em andamento'],
    gradient: 'from-neon/20 via-cyan-500/15 to-transparent',
    wip: true,
  },
  {
    id: 'laestoque',
    title: 'LA Estoque',
    description:
      'Interface de controle de estoque pronta para uso visual. Próximo passo: integrações e persistência completa no backend.',
    stack: ['JavaScript', 'HTML/CSS'],
    stats: ['UI pronta', 'GitHub Pages', 'Backend WIP'],
    liveUrl: 'https://lucasweb2025.github.io/laestoque/',
    githubUrl: 'https://github.com/Lucasweb2025/laestoque',
    badges: ['Frontend', 'Em andamento'],
    gradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
    wip: true,
  },
  {
    id: 'veiculos',
    title: 'Veículos Externo',
    description:
      'Controle de saídas de veículos externos na operação — em testes com equipe de campo, incluindo versão APK para Android.',
    stack: ['HTML/JS', 'Mobile APK'],
    stats: ['APK Android', 'Em testes', 'Campo'],
    githubUrl: 'https://github.com/Lucasweb2025/veiculoexterno2',
    badges: ['APK em testes', 'Em andamento'],
    gradient: 'from-green-500/15 via-cyan-500/10 to-transparent',
    wip: true,
  },
]

export const projectGroups = [
  {
    id: 'la-custom',
    title: 'L.A Custom',
    subtitle: 'Sistemas internos concluídos — em uso na operação todos os dias.',
    projects: laCustomProjects,
  },
  {
    id: 'clientes',
    title: 'Clientes reais',
    subtitle: 'Projetos entregues para negócios — sites no ar e domínio próprio.',
    projects: clientProjects,
  },
  {
    id: 'igreja',
    title: 'Igreja & voluntariado',
    subtitle: 'Projetos digitais na comunidade — Canvas LMS e apoio tecnológico.',
    projects: churchProjects,
  },
] as const satisfies readonly { id: string; title: string; subtitle: string; projects: Project[] }[]
