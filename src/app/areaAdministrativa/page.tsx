'use client'
import { ArrowDownRight, Bell, HandCoins, Users } from 'lucide-react'
import { SumaryCard } from './_components/sumaryCard'
import { Title } from './_components/title'

const Dashboard = () => {
  return (
    <div>
      <Title title="Dashboard" />
      <div className="grid grid-cols-4 gap-5 p-5">
        <SumaryCard
          nome="Alunos"
          valor="40.689"
          icone={<Users />}
          descricao="todos os alunos da instituição"
          categoria="alunos"
        />
        <SumaryCard
          nome="Avisos"
          valor="289"
          icone={<Bell />}
          descricao="todos os avisos da instituição"
          categoria="avisos"
        />
        <SumaryCard
          nome="Pagos"
          valor="R$ 40,689"
          icone={<HandCoins />}
          descricao="Alunos pagos durante o mês corrente"
          categoria="pagos"
        />
        <SumaryCard
          nome="Em aberto"
          valor="R$ 20,133"
          icone={<ArrowDownRight />}
          descricao="Alunos inadimplentes durante o mês corrente"
          categoria="emAberto"
        />
      </div>
    </div>
  )
}
export default Dashboard
