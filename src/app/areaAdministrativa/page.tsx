import { HeaderAdm } from '@/components/areaAdministrativa/headerAdm'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

const AreaAdministrativa = () => {
  return (
    <div className="flex w-full h-full border">
      <div className="bg-slate-50 w-60 p-4">
        <p className="text-2xl font-bold text-center pb-4 text-primary">ClasseMax</p>
        <Separator className="mb-4" />
      </div>

      <div className="flex-1">
        <div>
          <HeaderAdm />
        </div>

        <div className="bg-slate-100 h-full">Conteudo</div>
      </div>
    </div>
  )
}
export default AreaAdministrativa
