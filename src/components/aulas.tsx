import { University } from 'lucide-react'

export const AulasPopulares = () => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-center justify-center gap-2">
        <p>
          <University size={30} className="text-primary" />
        </p>
        <p className="text-3xl font-bold text-slate-700">Aulas Populares</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-5 md:px-60 px-4 py-4 ">
        <div className="rounded-lg shadow-lg border border-slate-500/20 h-40 w-full">CARD</div>
        <div className="rounded-lg shadow-lg border border-slate-500/20 h-40 w-full">CARD</div>
        <div className="rounded-lg shadow-lg border border-slate-500/20 h-40 w-full">CARD</div>
      </div>
    </div>
  )
}
