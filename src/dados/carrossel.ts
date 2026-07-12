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

/** Linha 1 (topo) — clientes reais */
export const linhaCarrossel1: ItemCarrossel[] = projetosClientes.map((p) =>
  projetoParaCarrossel(p),
)

/** Linha 2 — L.A Custom */
export const linhaCarrossel2: ItemCarrossel[] = projetosLaCustom.map((p) =>
  projetoParaCarrossel(p),
)

/** Linha 3 — em andamento */
export const linhaCarrossel3: ItemCarrossel[] = projetosEmAndamento.map((p) =>
  projetoParaCarrossel(p, p.etiquetas?.[0] ?? 'Em andamento'),
)
