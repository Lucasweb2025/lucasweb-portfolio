export const site = {
  name: 'Lucasweb',
  fullName: 'Lucas Silva Santos',
  title: 'Lucasweb — Analista de TI & Desenvolvedor Web',
  role: 'Analista de TI',
  company: 'L.A Custom',
  education: 'Cursando Análise e Desenvolvimento de Sistemas',
  // Altere quando publicar no GitHub Pages
  siteUrl: 'https://lucasweb2025.github.io/lucasweb-portfolio/',
  tagline:
    'Construo sistemas que rodam de verdade — da Torre de Controle na L.A Custom ao site da Nathalia Andrade no ar.',
  bio: 'Analista de TI na L.A Custom. Desenvolvi a Torre de Controle (operação diária de veículos), a campanha Performance Premium com ranking ao vivo para 7 concessionárias, e entregas para clientes como Nathalia Andrade e All Pink Beauty. Também atuo em projetos digitais na igreja com Canvas LMS. React, Firebase, Supabase e foco em entregar rápido o que a operação precisa.',
  aboutSubtitle:
    'Cursando ADS e já entregando em produção — L.A Custom, clientes reais e projetos voluntários na igreja.',
  github: 'https://github.com/Lucasweb2025',
  linkedin: 'https://www.linkedin.com/in/lucas-silva-santos-778542256/',
  instagram: 'https://instagram.com/lucasdmxx',
  instagramHandle: '@lucasdmxx',
  whatsapp: '5511945838316',
  whatsappDisplay: '(11) 94583-8316',
  photo: '/images/lucas.png',
  logo: '/images/logo-lw.png',
} as const

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
  { label: 'Simulação', href: '#simulacao' },
] as const

export function whatsappUrl(message?: string) {
  const text =
    message ??
    'Olá Lucas! Vi seu portfólio Lucasweb e gostaria de conversar sobre um projeto.'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
