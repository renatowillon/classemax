'use client'
import { PerfilUsuario } from '@/app/login/components/perfilUsuario'
import Link from 'next/link'

export const HeaderAdm = () => {
  return (
    <div className="bg-slate-50 py-5 flex flex-col md:flex-row gap-3 items-center justify-between px-10 ">
      <div></div>
      {/* <Link href="/" className="text-primary font-bold text-2xl">
        ClasseMax
      </Link> */}
      <div className="flex gap-3">
        <PerfilUsuario />
      </div>
    </div>
  )
}
