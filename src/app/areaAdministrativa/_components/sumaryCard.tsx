import { Card, CardHeader } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { Info, Users } from 'lucide-react'
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
        <div
          className={`p-5 rounded-2xl ${categoria === 'alunos' ? 'bg-purple-600/10 text-purple-500' : ''} ${categoria === 'avisos' ? 'bg-yellow-600/10 text-yellow-500' : ''} ${categoria === 'pagos' ? 'bg-green-600/10 text-green-500' : ''} ${categoria === 'emAberto' ? 'bg-red-600/10 text-red-500' : ''}`}
        >
          {icone}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 text-center pt-5 text-muted-foreground">
        <p></p>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info
                  className={`cursor-pointer ${categoria === 'alunos' ? 'text-purple-500' : ''} ${categoria === 'avisos' ? 'text-yellow-500' : ''} ${categoria === 'pagos' ? 'text-green-500' : ''} ${categoria === 'emAberto' ? 'text-red-500' : ''}`}
                />
              </TooltipTrigger>
              <TooltipContent
                className={`cursor-pointer ${categoria === 'alunos' ? 'bg-purple-500' : ''} ${categoria === 'avisos' ? 'bg-yellow-500' : ''} ${categoria === 'pagos' ? 'bg-green-500' : ''} ${categoria === 'emAberto' ? 'bg-red-500' : ''}`}
              >
                <p className="font-semibold">{descricao}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  )
}
