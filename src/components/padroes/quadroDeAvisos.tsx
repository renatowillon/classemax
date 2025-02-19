import { useEffect, useState } from 'react'
import { Loader2Icon, PenBox, Trash2 } from 'lucide-react'
import { formatarData } from '@/services/functions'
import { useAuth } from '@/context/AuthPrivider'
import { Button } from '../ui/button'
import { TypeAviso } from '@/app/types/typesAvisos'
import { ScrollArea } from '../ui/scroll-area'

export const Avisos = () => {
  const [avisos, setAvisos] = useState<TypeAviso[]>([])
  const { aluno } = useAuth()

  useEffect(() => {
    async function fetchAvisos() {
      const response = await fetch('api/avisos')
      const dataAll = await response.json()
      const data = dataAll
        .filter((aviso: TypeAviso) => aviso.status === true)
        .sort((a: TypeAviso, b: TypeAviso) => b.id - a.id)
      setAvisos(data || [])
    }
    fetchAvisos()
  }, [])

  return (
    <ul>
      {avisos.length == 0 && (
        <div className="flex items-center justify-center gap-2 py-5">
          <div>Carregando</div>
          <div>
            <Loader2Icon size={20} className="animate-spin" />
          </div>
        </div>
      )}

      {avisos.map((aviso) => {
        const dataFormatada = formatarData(aviso.data_cadastro)
        return (
          <li key={aviso.id} className="py-5 border-b flex flex-col gap-2 border-slate-200 px-5">
            <div className="flex items-center justify-between gap-5">
              <div className="bg-slate-200 rounded-lg h-20 w-20 flex flex-col items-center justify-center border border-slate-300">
                <div className=" font-bold text-2xl text-slate-600">{dataFormatada.dia}</div>
                <div className="font-bold text-sm text-slate-600">{dataFormatada.mes}</div>
              </div>
              <div className="w-full">
                <h1 className="text-2xl font-bold text-slate-600">{aviso.titulo}</h1>
                <div className="text-slate-600 px-5">{aviso.descricao}</div>
              </div>
              {aluno?.adm == true && (
                <div className="flex text-end items-center gap-2">
                  <Button className="p-3 bg-red-600 rounded-md hover:bg-red-500">
                    <Trash2 size={15} color="white" />
                  </Button>
                  <Button className="p-3 bg-slate-600 rounded-md hover:bg-slate-500">
                    <PenBox size={15} color="white" />
                  </Button>
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
