'use client'
import { supabase } from '@/lib/supabase'
import { Separator } from '../ui/separator'
import { useAuth } from '@/context/AuthPrivider'
import { useEffect, useState } from 'react'
import { TypeFinanceiro } from '@/app/types/typesFinanceiro'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { EllipsisIcon, Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'

export const FinanceiroAluno = () => {
  const { aluno } = useAuth()
  const [boleto, setBoletos] = useState<TypeFinanceiro[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBoleto = async () => {
      if (!aluno?.id) return

      const { data, error } = await supabase
        .from('financeiro')
        .select('*')
        .eq('aluno_id', aluno?.id)
      if (error) {
        console.error('erro ao buscar boleto', error)
      } else {
        setBoletos(data || [])
      }
      setLoading(false)
    }
    fetchBoleto()
  }, [aluno?.id, loading])

  const acoes = () => {
    toast.warning('Ações temporariamente indisponivel')
  }

  return (
    <div>
      <div className="flex items-center justify-between pb-3 pl-3">
        <h1 className=" text-lg">Financeiro</h1>
      </div>
      {boleto.length == 0 && (
        <div className="flex items-center justify-center gap-2 py-5">
          <div>Carregando</div>
          <div>
            <Loader2Icon size={20} className="animate-spin" />
          </div>
        </div>
      )}
      <Separator />
      {boleto.length != 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[600px]">Descrição</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {boleto.map((boleto) => (
              <TableRow key={boleto.id}>
                <TableCell>
                  {boleto.descricao} - {aluno?.nome}
                </TableCell>
                <TableCell>
                  {new Date(boleto.data_vencimento).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </TableCell>
                <TableCell>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(Number(boleto.valor))}
                </TableCell>
                <TableCell>{boleto.status}</TableCell>
                <TableCell className="">
                  <Button onClick={acoes}>
                    <EllipsisIcon size={15} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
