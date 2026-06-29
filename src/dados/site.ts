export const site = {
  nome: 'Lucasweb',
  nomeCompleto: 'Lucas Silva Santos',
  titulo: 'Lucasweb — Analista de TI & Desenvolvedor Web',
  cargo: 'Analista de TI',
  empresa: 'L.A Custom',
  formacao: 'Cursando Análise e Desenvolvimento de Sistemas',
  urlSite: 'https://lucasweb2025.github.io/lucasweb-portfolio/',
  frase:
    'Construo sistemas que rodam de verdade — da Torre de Controle na L.A Custom ao site da Nathalia Andrade no ar.',
  bio: 'Analista de TI na L.A Custom. Desenvolvi a Torre de Controle (operação diária de veículos), a campanha Performance Premium com ranking ao vivo para 7 concessionárias, e entregas para clientes como Nathalia Andrade e All Pink Beauty. Também atuo em projetos digitais na igreja com Canvas LMS. React, Firebase, Supabase e foco em entregar rápido o que a operação precisa.',
  github: 'https://github.com/Lucasweb2025',
  linkedin: 'https://www.linkedin.com/in/lucas-silva-santos-778542256/',
  instagram: 'https://instagram.com/lucasdmxx',
  instagramUsuario: '@lucasdmxx',
  whatsapp: '5511945838316',
  whatsappExibicao: '(11) 94583-8316',
  foto: `${import.meta.env.BASE_URL}images/lucas.png`,
  logo: `${import.meta.env.BASE_URL}images/logo-lw.png`,
} as const

export const linksNavegacao = [
  { rotulo: 'Sobre', href: '#sobre' },
  { rotulo: 'Projetos', href: '#projetos' },
  { rotulo: 'Simulação', href: '#simulacao' },
  { rotulo: 'Contato', href: '#contato' },
] as const

export function urlWhatsapp(mensagem?: string) {
  const texto =
    mensagem ??
    'Olá Lucas! Vi seu portfólio Lucasweb e gostaria de conversar sobre um projeto.'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`
}
