import { useEffect, useState } from 'react'
import { Loader2Icon, PenBox, Trash2 } from 'lucide-react'
import { formatarData } from '@/services/functions'
import { useAuth } from '@/context/AuthPrivider'
import { Button } from '../ui/button'
import { TypeAviso } from '@/app/types/typesAvisos'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { set } from 'react-hook-form'

export const Avisos = () => {
  const [avisos, setAvisos] = useState<TypeAviso[]>([])
  const { aluno } = useAuth()
  const [refreshAviso, setRefreshAviso] = useState(false)

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
  }, [refreshAviso])

  const deleteAvisos = async (id: number) => {
    try {
      const response = await fetch('api/avisos', {
        method: 'DELETE',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      setRefreshAviso(!refreshAviso)
      if (!response.ok) throw new Error('Erro ao deletar o aviso')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="p-3 bg-red-600 rounded-md hover:bg-red-500">
                          <Trash2 size={15} color="white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-slate-700">
                            Deseja deletar o aviso?
                          </DialogTitle>
                          <DialogDescription>
                            uma vez deletado o aviso não haverá mais possibilidade de recuperar!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex gap-3 justify-end pr-5">
                          <Button
                            onClick={() => {
                              deleteAvisos(aviso.id)
                            }}
                            className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-md"
                          >
                            Deletar
                          </Button>
                          <DialogClose asChild>
                            <Button className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-md">
                              Cancelar
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
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
    </div>
  )
}
