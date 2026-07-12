import {
  projetosClientes,
  projetosEmAndamento,
  projetosLaCustom,
  type Projeto,
} from './projetos'

export type ItemCarrossel = {
  id: string
  titulo: string
  rotulo: string
  gradiente: string
  destaque?: string
  imagem?: string
}

function projetoParaCarrossel(projeto: Projeto, rotulo?: string): ItemCarrossel {
  return {
    id: projeto.id,
    titulo: projeto.titulo,
    rotulo: rotulo ?? projeto.etiquetas?.[1] ?? projeto.etiquetas?.[0] ?? 'Projeto',
    gradiente: projeto.gradiente,
    destaque: projeto.destaques?.[0],
    imagem: projeto.imagem,
  }
}

const porId = Object.fromEntries(
  [...projetosLaCustom, ...projetosClientes].map((projeto) => [projeto.id, projeto]),
) as Record<string, Projeto>

/** Linha de cima — inclui Doces da Dih e Leticia Santos Makeup */
export const linhaCarrossel1: ItemCarrossel[] = [
  'torre',
  'performance',
  'nathalia',
  'docesdadih',
  'leticia',
  'anapaula',
].map((id) => projetoParaCarrossel(porId[id]))

/** Linha de baixo — demais clientes + projetos em andamento */
export const linhaCarrossel2: ItemCarrossel[] = [
  ...['checklist', 'allpink', 'globalgesso'].map((id) => projetoParaCarrossel(porId[id])),
  ...projetosEmAndamento.slice(0, 2).map((p) =>
    projetoParaCarrossel(p, p.etiquetas?.[0] ?? 'Em andamento'),
  ),
]
