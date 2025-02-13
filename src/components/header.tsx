'use client'
import { AreaDoAluno } from './areaDoAluno'
import { FaleConosco } from './faleConosco'
import { Button } from './ui/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="bg-primary py-5 flex flex-col md:flex-row gap-3 items-center justify-between px-10 ">
      <div className="text-slate-50 font-bold text-2xl">Classe Max</div>
      <div className="flex gap-3">
        <AreaDoAluno />
        <FaleConosco />
      </div>
    </div>
  )
}
