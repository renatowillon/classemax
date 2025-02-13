import { MapPlus } from 'lucide-react'
import { DireitosAutorais } from './direitosAutorais'
import { FaleConosco } from './faleConosco'
import MiniMap, { rota } from './miniMap'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="md:px-20 pt-5 md:py-3 md:grid md:grid-cols-3 flex flex-col gap-5">
        <div className="text-slate-100 flex flex-col items-center gap-10 px-5 justify-center">
          <p className="text-2xl font-bold">Classe Max</p>
          <p className="flex justify-center">
            Aqui você conta com uma grande estrutura e conforto em todas a instituição, tranzendo
            assim uma confiabilidade educacional.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <FaleConosco />
          <div className="text-slate-100 flex items-center justify-center flex-col">
            <p>
              <span className="font-bold">Fone: </span>+55 83 98833-2659
            </p>
            <p>
              <span className="font-bold">Email:</span>renatowillon@hotmail.com
            </p>
          </div>
        </div>

        <div className="text-slate-100 flex flex-col items-center justify-center gap-2">
          <Link href={rota} target="_blank" className="text-2xl font-bold flex gap-2 items-center">
            Criar Rota <MapPlus />
          </Link>
          <div className="">
            <div>
              {/* <span className="font-bold">Endereço:</span> */}
              <div className="w-80 rounded-lg bg-slate-400">
                <MiniMap latitude={-7.117287507599022} longitude={-34.861151994224876} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <DireitosAutorais />
      </div>
    </div>
  )
}
