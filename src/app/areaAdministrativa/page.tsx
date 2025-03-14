import { Users } from 'lucide-react'
import { SumaryCard } from './_components/sumaryCard'
import { Title } from './_components/title'

const Dashboard = () => {
  return (
    <div>
      <Title title="Dashboard" />
      <div className="grid grid-cols-4 gap-5 p-5">
        <SumaryCard
          nome="Total alunos"
          valor="40,689"
          icone={<Users />}
          descricao="8.5% novos usuários"
          categoria="alunos"
        />
        <SumaryCard
          nome="Total avisos"
          valor="40,689"
          icone={<Users />}
          descricao="8.5% novos usuários"
          categoria="avisos"
        />
        <SumaryCard
          nome="Total pagos"
          valor="40,689"
          icone={<Users />}
          descricao="8.5% novos usuários"
          categoria="pagos"
        />
        <SumaryCard
          nome="Total em aberto"
          valor="40,689"
          icone={<Users />}
          descricao="8.5% novos usuários"
          categoria="emAberto"
        />
      </div>
    </div>
  )
}
export default Dashboard
