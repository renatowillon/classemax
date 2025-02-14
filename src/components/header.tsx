import { UserButton } from '@clerk/nextjs'
import { AreaDoAluno } from './areaDoAluno'
import { FaleConosco } from './faleConosco'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="bg-primary py-5 flex flex-col md:flex-row gap-3 items-center justify-between px-10 ">
      <Link href="/" className="text-slate-50 font-bold text-2xl">
        Classe Max
      </Link>
      <div className="flex gap-3">
        <AreaDoAluno />
        <FaleConosco />
      </div>
    </div>
  )
}
