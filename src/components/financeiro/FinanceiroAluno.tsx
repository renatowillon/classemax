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
import { Badge } from '../ui/badge'

export const FinanceiroAluno = () => {
  const { aluno } = useAuth()
  const [boleto, setBoletos] = useState<TypeFinanceiro[]>([])
  const [loading, setLoading] = useState(true)

  const calcularDataReferencia = (dataVencimento: Date) => {
    const data = new Date(dataVencimento) // Converte a string para Date
    data.setMonth(data.getMonth() - 1) // Subtrai 1 mês

    // Formata para "MM/YYYY"
    const mes = String(data.getMonth() + 1).padStart(2, '0') // getMonth() retorna 0-11, então somamos +1
    const ano = data.getFullYear()

    return `${mes}/${ano}`
  }

  const boletosOrdenados = [...boleto].sort(
    (a, b) => new Date(a.data_vencimento).getTime() - new Date(b.data_vencimento).getTime()
  )

  const validarBoleto = (datavencimento: Date, pago: boolean) => {
    if (pago) return 'Pago'
    const dataHoje = new Date()
    const vencimento = new Date(datavencimento)

    return vencimento < dataHoje ? 'Vencido' : 'A vencer'
  }

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
    toast.warning(
      'Ações temporariamente indisponivel para alunos, disponivel apenas para Administrador'
    )
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
            <TableRow className="">
              <TableHead className="w-[450px]">Descrição</TableHead>
              <TableHead className="">Vencimento</TableHead>
              <TableHead className="">Valor</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Data de Pagamento</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {boletosOrdenados.map((boleto) => (
              <TableRow key={boleto.id}>
                <TableCell className="flex flex-col gap-1">
                  <div>{boleto.descricao}</div>
                  <div className="text-xs text-muted-foreground pl-3">
                    Ref: {calcularDataReferencia(boleto.data_vencimento)}
                  </div>
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
                <TableCell>
                  {validarBoleto(boleto.data_vencimento, boleto.pago) === 'A vencer' && (
                    <Badge className="w-[90px] flex items-center justify-center bg-primary">
                      {validarBoleto(boleto.data_vencimento, boleto.pago)}
                    </Badge>
                  )}
                  {validarBoleto(boleto.data_vencimento, boleto.pago) === 'Vencido' && (
                    <Badge className="w-[90px] flex items-center justify-center bg-red-600 hover:bg-red-500">
                      {validarBoleto(boleto.data_vencimento, boleto.pago)}
                    </Badge>
                  )}
                  {validarBoleto(boleto.data_vencimento, boleto.pago) === 'Pago' && (
                    <Badge className="w-[90px] flex items-center justify-center bg-green-600 hover:bg-green-500">
                      {validarBoleto(boleto.data_vencimento, boleto.pago)}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {boleto.data_pagamento == null
                    ? '-'
                    : new Date(boleto.data_pagamento).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                </TableCell>
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
