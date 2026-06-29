import { ProvedorDemo } from '../contextos/ContextoDemo'
import { SecaoCarrossel } from '../secoes/Carrossel'
import { SecaoContato } from '../secoes/Contato'
import { SecaoInicio } from '../secoes/Inicio'
import { SecaoProjetos } from '../secoes/Projetos'
import { SecaoRodape } from '../secoes/Rodape'
import { SecaoServicos } from '../secoes/Servicos'
import { SecaoSimulacao } from '../secoes/Simulacao'
import { SecaoSobre } from '../secoes/Sobre'

export function PaginaPortfolio() {
  return (
    <ProvedorDemo>
      <div className="overflow-x-clip bg-[#0C0C0C] font-[Kanit,sans-serif] text-[#D7E2EA]">
        <SecaoInicio />
        <SecaoCarrossel />
        <SecaoSobre />
        <SecaoServicos />
        <SecaoProjetos />
        <SecaoSimulacao />
        <SecaoContato />
        <SecaoRodape />
      </div>
    </ProvedorDemo>
  )
}
