import { DireitosAutorais } from './direitosAutorais'
import { FaleConosco } from './faleConosco'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="md:px-20 md:py-3 md:grid md:grid-cols-3 flex flex-col gap-5">
        <div className="text-slate-100 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">Classe Max</p>
          <p className="flex justify-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <FaleConosco />
        </div>

        <div className="text-slate-100 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Nossos Contatos</h1>
          <div className="">
            <div>
              <span className="font-bold">Endereço:</span>
              <div className="w-80 h-36 rounded-lg bg-slate-400">MAPA GOOGLE</div>
            </div>
            <p>
              <span className="font-bold">Fone: </span>+55 83 98833-2659
            </p>
            <p>
              <span className="font-bold">Email:</span>renatowillon@hotmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="text-white">
        <DireitosAutorais />
      </div>
    </div>
  )
}
