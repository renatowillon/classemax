import { EllipsisIcon } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useAuth } from '@/context/AuthPrivider'
import { useEffect, useState } from 'react'
import { TypeNotas } from '@/app/types/typesNotas'
import { supabase } from '@/lib/supabase'

export const TabelaNotas = () => {
  const { aluno } = useAuth()
  const [notas, setNotas] = useState<TypeNotas[]>([])

  useEffect(() => {
    if (!aluno) return

    async function fetchNotas() {
      const { data, error } = await supabase
        .from('notas_beta')
        .select(
          `
        id,
        disciplinas (nome),
        nota_1_bimestre, 
        nota_2_bimestre, 
        nota_3_bimestre, 
        nota_4_bimestre
        `
        )
        .eq('aluno_id', aluno?.id)

      if (error) {
        console.error('Erro ao buscar notas', error)
      } else {
        setNotas(data as unknown as TypeNotas[])
      }
    }
    fetchNotas()
  }, [aluno])
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[450px]">Disciplina</TableHead>
            <TableHead className="text-center">1º Bimestre</TableHead>
            <TableHead className="text-center">2º Bimestre</TableHead>
            <TableHead className="text-center">3º Bimestre</TableHead>
            <TableHead className="text-center">4º Bimestre</TableHead>
            <TableHead className="text-center">Média Geral</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notas.map((notas) => (
            <TableRow key={notas.id}>
              <TableCell className="flex flex-col gap-1">
                <div>{notas.disciplinas.nome}</div>
              </TableCell>
              <TableCell className="text-center">{notas.nota_1_bimestre}</TableCell>
              <TableCell className="text-center">{notas.nota_2_bimestre}</TableCell>
              <TableCell className="text-center">{notas.nota_3_bimestre}</TableCell>
              <TableCell className="text-center">{notas.nota_4_bimestre}</TableCell>
              <TableCell className="text-center">000</TableCell>
              <TableCell className="flex items-center justify-center">
                <Badge className="w-[90px] flex items-center justify-center bg-green-600 hover:bg-green-500">
                  Aprovado
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
