'use client'
import { Separator } from '@/components/ui/separator'
import { Title } from '../_components/title'
import { Pesquisa } from '../_components/pesquisa'
import { CadastroAluno } from '../_components/cadastroAluno'

const Alunos = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title="Alunos" />
        <Pesquisa />
      </div>
      <Separator />
      <CadastroAluno />
    </div>
  )
}
export default Alunos
