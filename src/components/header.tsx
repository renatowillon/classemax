'use client'
import { Button } from './ui/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="bg-primary py-5 flex items-center justify-between px-10 ">
      <div className="text-slate-50 font-bold text-2xl">Classe Max</div>

      <div className="flex gap-3">
        <Button className="bg-yellow-400 text-black rounded-full p-6 hover:bg-secondary">
          Area do Aluno
        </Button>
        <Button asChild className="bg-yellow-400 text-black rounded-full p-6 hover:bg-secondary">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5583988332659"
            className=""
          >
            Fale Conosco
          </Link>
        </Button>
      </div>
    </div>
  )
}
