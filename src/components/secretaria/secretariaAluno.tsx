import { toast } from 'sonner'
import { Separator } from '../ui/separator'
import { FileCheck2, FileText, IdCard, UserPen } from 'lucide-react'

export const SecretariaAluno = () => {
  const acaoDoClick = () => {
    toast.warning('Temporariamente indisponivel.')
  }
  return (
    <div className="w-full h-[450px]">
      <h1 className="pb-3 pl-3 text-lg">Secretaria</h1>
      <Separator />

      <div className="p-3 grid grid-cols-4 gap-5 ">
        <div
          onClick={acaoDoClick}
          className="border flex flex-col justify-between rounded-lg h-48 cursor-pointer hover:shadow-lg transition-all duration-300 p-3"
        >
          <span className="flex items-center justify-center pb-3">
            <FileCheck2 size={50} className="text-muted-foreground" />
          </span>
          <h1 className="flex items-center justify-center text-xl text-muted-foreground font-bold">
            Atestado de Matricula
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <Separator />
            <p className="text-muted-foreground text-sm">Solicite seu atestado de matricula</p>
          </div>
        </div>
        <div
          onClick={acaoDoClick}
          className="border flex flex-col justify-between rounded-lg h-48 cursor-pointer hover:shadow-lg transition-all duration-300 p-3"
        >
          <span className="flex items-center justify-center pb-3">
            <IdCard size={50} className="text-muted-foreground" />
          </span>
          <h1 className="flex items-center justify-center text-xl text-muted-foreground font-bold">
            Carteirinha Estudantil
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <Separator />
            <p className="text-muted-foreground text-sm">Solicite sua carteirinha</p>
          </div>
        </div>
        <div
          onClick={acaoDoClick}
          className="border flex flex-col justify-between rounded-lg h-48 cursor-pointer hover:shadow-lg transition-all duration-300 p-3"
        >
          <span className="flex items-center justify-center pb-3">
            <FileText size={50} className="text-muted-foreground" />
          </span>
          <h1 className="flex items-center justify-center text-xl text-muted-foreground font-bold">
            Histórico Escolar
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <Separator />
            <p className="text-muted-foreground text-sm">Solicite seu histórico escolar</p>
          </div>
        </div>
        <div
          onClick={acaoDoClick}
          className="border flex flex-col justify-between rounded-lg h-48 cursor-pointer hover:shadow-lg transition-all duration-300 p-3"
        >
          <span className="flex items-center justify-center pb-3">
            <UserPen size={50} className="text-muted-foreground" />
          </span>
          <h1 className="flex items-center justify-center text-xl text-muted-foreground font-bold">
            Atualizar Dados
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <Separator />
            <p className="text-muted-foreground text-sm">Mantenha seus dados atualizado</p>
          </div>
        </div>
      </div>
    </div>
  )
}
