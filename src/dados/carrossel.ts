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

const entregues = [...projetosLaCustom, ...projetosClientes]

export const linhaCarrossel1: ItemCarrossel[] = entregues.slice(0, 6).map((p) => projetoParaCarrossel(p))

export const linhaCarrossel2: ItemCarrossel[] = [
  ...entregues.slice(6).map((p) => projetoParaCarrossel(p)),
  ...projetosEmAndamento.slice(0, 2).map((p) =>
    projetoParaCarrossel(p, p.etiquetas?.[0] ?? 'Em andamento'),
  ),
]
