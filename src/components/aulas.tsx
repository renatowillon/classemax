import { University } from 'lucide-react'

export const AtividadesPopulares = () => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-center justify-center gap-2">
        <p>
          <University size={30} className="text-primary" />
        </p>
        <p className="text-3xl font-bold text-slate-700">Atividades Populares</p>
      </div>
      <div className="grid-cols-1 h-full grid md:grid-cols-3 justify-center items-center gap-5 md:px-60 px-2 py-2 ">
        <div className="flex items-center justify-center flex-col hover:scale-110 transition-all duration-300">
          <div className="bg-[url('/imagens/futsal.jpg')] bg-cover rounded-lg shadow-lg h-40 w-full"></div>
          <p className="text-slate-600 font-bold text-2xl pt-3">Futsal</p>
        </div>
        <div className="flex items-center justify-center flex-col hover:scale-110 transition-all duration-300">
          <div className="bg-[url('/imagens/ginastica.jpg')] bg-cover rounded-lg shadow-lg h-40 w-full"></div>
          <p className="text-slate-600 font-bold text-2xl pt-3">Ginástica</p>
        </div>
        <div className="flex items-center justify-center flex-col hover:scale-110 transition-all duration-300">
          <div className="bg-[url('/imagens/robotica.jpg')] bg-cover rounded-lg shadow-lg h-40 w-full"></div>
          <p className="text-slate-600 font-bold text-2xl pt-3">Robótica</p>
        </div>
      </div>
    </div>
  )
}
