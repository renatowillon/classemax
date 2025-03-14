import { Card, CardHeader } from '@/components/ui/card'
import { Users } from 'lucide-react'
import { ReactNode } from 'react'

interface SumaryCardProps {
  nome: string
  valor: string
  icone: ReactNode
  descricao: string
}

export const SumaryCard = () => {
  return (
    <Card className="bg-slate-50 p-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-md">Total Usuário</p>
          <p className="text-3xl font-bold pl-5">40,689</p>
        </div>
        <div className="bg-purple-600/10 p-5 rounded-2xl">
          <Users className="text-purple-600" />
        </div>
      </div>
      <div className="text-center pt-5 text-muted-foreground">8.5% novos usuários</div>
    </Card>
  )
}
