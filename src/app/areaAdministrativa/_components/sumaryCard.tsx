import { Card, CardHeader } from '@/components/ui/card'
import { Users } from 'lucide-react'
import { ReactNode } from 'react'

interface SumaryCardProps {
  nome: string
  valor: string
  icone: ReactNode
  descricao: string
  categoria: 'alunos' | 'avisos' | 'pagos' | 'emAberto'
}

export const SumaryCard = ({ categoria, descricao, icone, nome, valor }: SumaryCardProps) => {
  return (
    <Card className="bg-slate-50 p-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-md">{nome}</p>
          <p className="text-3xl font-bold pl-5">{valor}</p>
        </div>
        <div className="bg-purple-600/10 p-5 rounded-2xl text-purple-500">{icone}</div>
      </div>
      <div className="text-center pt-5 text-muted-foreground">{descricao}</div>
    </Card>
  )
}
