import type { IdDemo } from '../tipos/demo'

export type Projeto = {
  id: string
  titulo: string
  descricao: string
  tecnologias: string[]
  destaques?: string[]
  urlAoVivo?: string
  urlGithub?: string
  etiquetas?: string[]
  gradiente: string
  imagem?: string
  imagens?: string[]
  emAndamento?: boolean
  idDemo?: IdDemo
}

export type GrupoProjetos = {
  id: string
  titulo: string
  subtitulo: string
}

export function imagemProjeto(arquivo: string) {
  return `${import.meta.env.BASE_URL}images/projects/${arquivo}`
}

export const projetosLaCustom: Projeto[] = [
  {
    id: 'torre',
    titulo: 'Torre de Controle',
    descricao:
      'Painel operacional usado todo dia na L.A Custom: triagem de veículos em boxes, check-in com fotos, rastreio para o cliente, auditoria e dashboard de entregas.',
    tecnologias: ['JavaScript', 'Firebase', 'PWA'],
    destaques: ['Uso diário', 'Check-in/out', 'Modo visitante'],
    urlAoVivo: 'https://lucasweb2025.github.io/torredecontrole/',
    urlGithub: 'https://github.com/Lucasweb2025/torredecontrole',
    etiquetas: ['Concluído', 'L.A Custom'],
    gradiente: 'from-cyan-500/30 via-purple-500/20 to-transparent',
    imagem: imagemProjeto('torre.jpg'),
    idDemo: 'torre',
  },
  {
    id: 'performance',
    titulo: 'Performance Premium',
    descricao:
      'Campanha gamificada de vendas para a rede L.A Custom: consultores lançam contratos, gerentes aprovam, ranking atualiza em tempo real com tiers Bronze → Black.',
    tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
    destaques: ['7 concessionárias', 'Ranking ao vivo', 'Export CSV'],
    urlAoVivo: 'https://campanhalacustom.netlify.app/',
    urlGithub: 'https://github.com/Lucasweb2025/la-custom-performance-campanha',
    etiquetas: ['Concluído', 'L.A Custom'],
    gradiente: 'from-amber-500/25 via-yellow-500/15 to-transparent',
    imagem: imagemProjeto('performance.jpg'),
  },
  {
    id: 'checklist',
    titulo: 'Check-list Limpeza',
    descricao:
      'Checklist digital por setor (copa, recepção, banheiros, salas) — equipe de limpeza segue rotinas padronizadas com acesso pelo celular.',
    tecnologias: ['HTML/JS', 'GitHub Pages'],
    destaques: ['14 setores', 'Acesso mobile', 'Em uso'],
    urlAoVivo: 'https://lucasweb2025.github.io/checklist/',
    urlGithub: 'https://github.com/Lucasweb2025/checklist',
    etiquetas: ['Concluído', 'L.A Custom'],
    gradiente: 'from-emerald-500/20 via-cyan-500/15 to-transparent',
    imagem: imagemProjeto('checklist.jpg'),
  },
]

export const projetosClientes: Projeto[] = [
  {
    id: 'nathalia',
    titulo: 'Nathalia Andrade',
    descricao:
      'Site completo para salão de beleza em São Paulo: institucional, galeria, agenda online em 3 passos e painel para a proprietária gerenciar horários.',
    tecnologias: ['React', 'Supabase', 'PWA'],
    destaques: ['Domínio próprio', 'Agenda online', 'Painel admin'],
    urlAoVivo: 'https://salaonathaliaandrade.com.br/',
    urlGithub: 'https://github.com/Lucasweb2025/nataliaandrade',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-purple-500/30 via-pink-500/20 to-transparent',
    imagem: imagemProjeto('nathalia.jpg'),
  },
  {
    id: 'allpink',
    titulo: 'All Pink Beauty',
    descricao:
      'Catálogo mobile para loja de beleza: produtos, carrinho, PWA instalável na tela inicial e pedido montado direto no WhatsApp da loja.',
    tecnologias: ['HTML/JS', 'Firebase', 'GitHub Pages'],
    destaques: ['100% mobile', 'Carrinho', 'Pedido WhatsApp'],
    urlAoVivo: 'https://lucasweb2025.github.io/allpink/',
    urlGithub: 'https://github.com/Lucasweb2025/allpink',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-pink-500/30 via-purple-500/20 to-transparent',
    imagem: imagemProjeto('allpink.jpg'),
  },
  {
    id: 'globalgesso',
    titulo: 'Global Gesso',
    descricao:
      'Site institucional e sistema operacional para empresa de gesso e drywall: landing com orçamento, galeria de obras, painel admin e portal de campo para equipe.',
    tecnologias: ['Next.js', 'Supabase', 'Tailwind CSS'],
    destaques: ['Domínio próprio', 'Painel admin', 'Portal de campo'],
    urlAoVivo: 'https://globalgesso.com.br/',
    urlGithub: 'https://github.com/Lucasweb2025/globalgesso',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-slate-500/25 via-cyan-500/15 to-transparent',
    imagem: imagemProjeto('globalgesso.jpg'),
  },
  {
    id: 'anapaula',
    titulo: 'Ana Paula Psicóloga',
    descricao:
      'Site profissional para psicóloga com apresentação de serviços, FAQ, agendamento online, PWA instalável e painel administrativo com Firebase.',
    tecnologias: ['React', 'Firebase', 'PWA'],
    destaques: ['Site no ar', 'Agenda online', 'Atendimento online'],
    urlAoVivo: 'https://psicologa-anapaula.web.app/',
    urlGithub: 'https://github.com/Lucasweb2025/psicologa-anapaula',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-sky-500/25 via-blue-500/15 to-transparent',
    imagem: imagemProjeto('anapaula.jpg'),
  },
  {
    id: 'docesdadih',
    titulo: 'Doces da Dih',
    descricao:
      'Catálogo online de bolo de pote: vitrine com carrossel, sacola e pedido no WhatsApp, mais painel admin para cadastrar produtos com foto em tempo real.',
    tecnologias: ['HTML/JS', 'Firebase', 'PWA'],
    destaques: ['Vitrine ao vivo', 'Pedido WhatsApp', 'Painel admin'],
    urlAoVivo: 'https://doces-da-dih.web.app/',
    urlGithub: 'https://github.com/Lucasweb2025/docesdadih',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-amber-500/30 via-rose-500/20 to-transparent',
    imagem: imagemProjeto('docesdadih.jpg'),
  },
  {
    id: 'leticia',
    titulo: 'Leticia Santos Makeup',
    descricao:
      'PWA de maquiagem e cabelo a domicílio: site institucional, agenda em tempo real, painel admin com dashboard, galeria e bloqueio de dias.',
    tecnologias: ['React', 'Firebase', 'PWA'],
    destaques: ['Agenda ao vivo', 'Painel admin', 'PWA instalável'],
    urlAoVivo: 'https://leticiasantosmakeuphair.web.app/',
    urlGithub: 'https://github.com/Lucasweb2025/leticiamakeup',
    etiquetas: ['Concluído', 'Cliente real'],
    gradiente: 'from-rose-500/25 via-amber-500/15 to-transparent',
    imagem: imagemProjeto('leticia.jpg'),
  },
]

export const projetosIgreja: Projeto[] = [
  {
    id: 'igreja-canvas',
    titulo: 'Projetos na Igreja',
    descricao:
      'Criação e gestão de conteúdo digital no Canvas LMS — módulos, materiais e trilhas para a comunidade. Trabalho voluntário de apoio tecnológico ao ministério.',
    tecnologias: ['Canvas LMS', 'Conteúdo digital'],
    destaques: ['Voluntariado', 'Módulos e trilhas', 'Canvas LMS'],
    etiquetas: ['Voluntariado', 'Igreja'],
    gradiente: 'from-indigo-500/25 via-purple-500/15 to-transparent',
  },
]

export const projetosEmAndamento: Projeto[] = [
  {
    id: 'vitrine',
    titulo: 'VitrineEngine',
    descricao:
      'SaaS multi-loja com planos, trial e painel administrativo. Demo funcional — comercialização pendente (domínio e gateway de pagamento).',
    tecnologias: ['HTML/JS', 'Firebase'],
    destaques: ['Demo live', 'Multi-loja', 'Planos + trial'],
    urlAoVivo: 'https://saas-loja-286c0.web.app',
    etiquetas: ['Demo', 'Em andamento'],
    gradiente: 'from-neon/20 via-cyan-500/15 to-transparent',
    imagem: imagemProjeto('vitrine.jpg'),
    emAndamento: true,
  },
  {
    id: 'laestoque',
    titulo: 'LA Estoque',
    descricao:
      'Interface de controle de estoque pronta para uso visual. Próximo passo: integrações e persistência completa no backend.',
    tecnologias: ['JavaScript', 'HTML/CSS'],
    destaques: ['UI pronta', 'GitHub Pages', 'Backend WIP'],
    urlAoVivo: 'https://lucasweb2025.github.io/laestoque/',
    urlGithub: 'https://github.com/Lucasweb2025/laestoque',
    etiquetas: ['Frontend', 'Em andamento'],
    gradiente: 'from-cyan-500/15 via-blue-500/10 to-transparent',
    imagem: imagemProjeto('laestoque.jpg'),
    emAndamento: true,
  },
  {
    id: 'veiculos',
    titulo: 'Veículos Externo',
    descricao:
      'Controle de saídas de veículos externos na operação — em testes com equipe de campo, incluindo versão APK para Android.',
    tecnologias: ['HTML/JS', 'Mobile APK'],
    destaques: ['APK Android', 'Em testes', 'Campo'],
    urlGithub: 'https://github.com/Lucasweb2025/veiculoexterno2',
    etiquetas: ['APK em testes', 'Em andamento'],
    gradiente: 'from-green-500/15 via-cyan-500/10 to-transparent',
    imagem: imagemProjeto('veiculos.jpg'),
    imagens: [
      imagemProjeto('veiculos.jpg'),
      imagemProjeto('veiculos-mapa.jpg'),
      imagemProjeto('veiculos-corrida.jpg'),
    ],
    emAndamento: true,
  },
]

export const gruposProjetos = [
  {
    id: 'la-custom',
    titulo: 'L.A Custom',
    subtitulo: 'Sistemas internos concluídos — em uso na operação todos os dias.',
    projetos: projetosLaCustom,
  },
  {
    id: 'clientes',
    titulo: 'Clientes reais',
    subtitulo: 'Projetos entregues para negócios — sites no ar e domínio próprio.',
    projetos: projetosClientes,
  },
  {
    id: 'igreja',
    titulo: 'Igreja & voluntariado',
    subtitulo: 'Projetos digitais na comunidade — Canvas LMS e apoio tecnológico.',
    projetos: projetosIgreja,
  },
] as const satisfies readonly { id: string; titulo: string; subtitulo: string; projetos: Projeto[] }[]

export const projetosDestaque = [
  projetosLaCustom[0],
  projetosLaCustom[1],
  projetosClientes[0],
] as const
