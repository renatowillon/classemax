import { Loader2Icon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { useState } from 'react'
import { BlocoNotas } from './blocoNotas'
import { TabelaNotas } from './tabelaNotas'

export const AreaNotas = () => {
  const [notas, setNotas] = useState('')
  return (
    <div className="w-full h-[450px]">
      <div className="flex items-center justify-between pb-3 pl-3">
        <h1 className=" text-lg">Notas</h1>
      </div>
      {/* {notas.length == 0 && (
        <div className="flex items-center justify-center gap-2 py-5">
          <div>Carregando</div>
          <div>
            <Loader2Icon size={20} className="animate-spin" />
          </div>
        </div>
      )} */}
      <Separator />

      <div className="">
        {/* <BlocoNotas /> */}
        <TabelaNotas />
      </div>
    </div>
  )
}
