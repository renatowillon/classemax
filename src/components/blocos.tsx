import { BookOpenText, FerrisWheel, Lightbulb } from 'lucide-react'

export const Blocos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center gap-3 md:px-20 px-4 py-3">
      <div className="p-4 h-40 bg-orange-600 text-white rounded-lg flex flex-col items-center justify-center">
        <p>
          <BookOpenText size={50} />
        </p>
        <p className="text-2xl font-bold">Aprendizagem Criativa</p>
        <p>Seu filho tem inúmeras maneiras de aprender, de forma gamificada!</p>
      </div>
      <div className="p-4 h-40 bg-violet-600 text-white rounded-lg flex flex-col items-center justify-center">
        <p>
          <Lightbulb size={50} />
        </p>
        <p className="text-2xl font-bold">Desenvolvimento Cognitivo</p>
        <p>Aumente o desenvolvimento cognitivo do seu filho com diversas atividades práticas.</p>
      </div>
      <div className="p-4 h-40 bg-green-600 text-white rounded-lg flex flex-col items-center justify-center">
        <p>
          <FerrisWheel size={50} />
        </p>
        <p className="text-2xl font-bold">Várias atividades</p>
        <p>Diversas atividades para executar durante todo o ensinamento anual</p>
      </div>
    </div>
  )
}
