import { Separator } from '@/components/ui/separator'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export const DireitosAutorais = () => {
  return (
    <footer className="text-slate-100">
      <Separator />
      <div className="flex justify-center items-center gap-2 py-5 text-center text-sm">
        Desenvolvido por
        {/* feito com <Heart fill="white" size={20} className="animate-pulse" /> */}
        <Link href="https://renatowillon.vercel.app/" target="_blank" className="font-bold">
          wDev
        </Link>
      </div>
    </footer>
  )
}
