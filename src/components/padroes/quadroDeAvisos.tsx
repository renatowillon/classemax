import { Aviso } from '@/app/types/typesAvisos'
import { useEffect, useState } from 'react'
import { Loader2Icon } from 'lucide-react'
import { formatarData } from '@/services/functions'

export const Avisos = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([])

  useEffect(() => {
    async function fetchAvisos() {
      const response = await fetch('api/avisos')
      const dataAll = await response.json()
      const data = dataAll
        .filter((aviso: Aviso) => aviso.status === true)
        .sort((a: Aviso, b: Aviso) => b.id - a.id)
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
            <div className="flex items-center gap-5">
              <div className="bg-slate-200 rounded-lg h-20 w-20 flex flex-col items-center justify-center border border-slate-300">
                <div className=" font-bold text-2xl text-slate-600">{dataFormatada.dia}</div>
                <div className="font-bold text-sm text-slate-600">{dataFormatada.mes}</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-600">{aviso.titulo}</h1>
                <div className="text-slate-600 px-5">{aviso.descricao}</div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
