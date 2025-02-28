import { CheckCheck, EllipsisIcon, X } from 'lucide-react'
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

  function calcMedia(n1: number, n2: number, n3: number, n4: number) {
    //const valoresValidos = [n1, n2, n3, n4].filter((valor) => valor > 0)
    const notaTotal = n1 + n2 + n3 + n4
    //if (valoresValidos.length === 0) return 0
    const divisor = 4 //valoresValidos
    return notaTotal / divisor || 0 //.length || 0
  }

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
            <TableHead className="text-center border-x">Média Geral</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notas.map((notas) => (
            <TableRow key={notas.id}>
              <TableCell className="flex flex-col">
                <div className="pl-5 ">{notas.disciplinas.nome}</div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 w-full">
                  {notas.nota_1_bimestre?.toFixed(1)}
                  {notas.nota_1_bimestre > 6 ? (
                    <CheckCheck size={20} className="text-green-500" />
                  ) : (
                    <X size={20} className="text-red-500" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 w-full">
                  {notas.nota_2_bimestre?.toFixed(1)}
                  {notas.nota_2_bimestre > 6 ? (
                    <CheckCheck size={20} className="text-green-500" />
                  ) : (
                    <X size={20} className="text-red-500" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 w-full">
                  {notas.nota_3_bimestre?.toFixed(1)}
                  {notas.nota_3_bimestre > 6 ? (
                    <CheckCheck size={20} className="text-green-500" />
                  ) : (
                    <X size={20} className="text-red-500" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2 w-full">
                  {notas.nota_4_bimestre?.toFixed(1)}
                  {notas.nota_4_bimestre > 6 ? (
                    <CheckCheck size={20} className="text-green-500" />
                  ) : (
                    <X size={20} className="text-red-500" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center border-x">
                <div className="flex items-center justify-center gap-2">
                  <div>
                    {calcMedia(
                      notas.nota_1_bimestre,
                      notas.nota_2_bimestre,
                      notas.nota_3_bimestre,
                      notas.nota_4_bimestre
                    ).toFixed(1)}
                  </div>
                  <div>
                    {calcMedia(
                      notas.nota_1_bimestre,
                      notas.nota_2_bimestre,
                      notas.nota_3_bimestre,
                      notas.nota_4_bimestre
                    ).toFixed(1) >= '6' ? (
                      <CheckCheck size={20} className="text-green-500" />
                    ) : (
                      <X size={20} className="text-red-500" />
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="flex items-center justify-center">
                <Badge
                  className={`w-[90px] flex items-center justify-center ${
                    calcMedia(
                      notas.nota_1_bimestre,
                      notas.nota_2_bimestre,
                      notas.nota_3_bimestre,
                      notas.nota_4_bimestre
                    ).toFixed(1) < '6'
                      ? 'bg-red-600 hover:bg-red-500'
                      : 'bg-green-600 hover:bg-green-500'
                  } `}
                >
                  {calcMedia(
                    notas.nota_1_bimestre,
                    notas.nota_2_bimestre,
                    notas.nota_3_bimestre,
                    notas.nota_4_bimestre
                  ).toFixed(1) < '6'
                    ? 'Reprovado'
                    : 'Aprovado'}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
