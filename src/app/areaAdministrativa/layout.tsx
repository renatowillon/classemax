'use client'
import { HeaderAdm } from '@/components/areaAdministrativa/headerAdm'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthPrivider'
import { LayoutDashboard, MessageCircleMore, Receipt, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Children } from 'react'

const RootLayoutAreaAdministrativa = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  return (
    <div className="w-full h-full border transition-all duration-300">
      <div className="bg-slate-50 p-4 flex justify-between items-center">
        <p className=" px-10 text-2xl font-bold text-primary flex justify-center items-center">
          ClasseMax
        </p>
        <HeaderAdm />
      </div>

      <div className="grid grid-cols-[1fr,5fr] gap-5 h-screen w-full ">
        <div className="flex flex-col items-center w-full gap-3 py-3 px-5 border-r">
          <Button
            asChild
            className={
              pathname === '/areaAdministrativa'
                ? 'bg-primary w-full h-14'
                : 'text-muted-foreground bg-secondary hover:text-slate-100 transition-all duration-300 w-full h-14'
            }
          >
            <Link href={'/areaAdministrativa'}>
              <LayoutDashboard />
              Dashboard
            </Link>
          </Button>
          <Button
            asChild
            className={
              pathname === '/areaAdministrativa/alunos'
                ? ' bg-primary w-full h-14'
                : 'text-muted-foreground bg-secondary hover:text-slate-100 transition-all duration-300 w-full h-14'
            }
          >
            <Link href={'/areaAdministrativa/alunos'}>
              <Users /> Alunos
            </Link>
          </Button>
          <Button
            asChild
            className={
              pathname === '/areaAdministrativa/financeiro'
                ? ' bg-primary w-full h-14'
                : 'text-muted-foreground bg-secondary hover:text-slate-100 transition-all duration-300 w-full h-14'
            }
          >
            <Link href={'/areaAdministrativa/financeiro'}>
              <Receipt /> Financeiro
            </Link>
          </Button>
          <Button
            asChild
            className={
              pathname === '/areaAdministrativa/avisos'
                ? ' bg-primary w-full h-14'
                : 'text-muted-foreground bg-secondary hover:text-slate-100 transition-all duration-300 w-full h-14'
            }
          >
            <Link href={'/areaAdministrativa/avisos'}>
              <MessageCircleMore />
              Avisos
            </Link>
          </Button>
        </div>

        <div className="bg-slate-100 h-full rounded-lg">{children}</div>
      </div>
    </div>
  )
}
export default RootLayoutAreaAdministrativa
