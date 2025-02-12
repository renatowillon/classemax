import Link from 'next/link'
import { Button } from './ui/button'

export const FaleConosco = () => {
  return (
    <Button asChild className="bg-yellow-400 text-black rounded-full p-6 hover:bg-secondary">
      <Link target="_blank" href="https://api.whatsapp.com/send?phone=5583988332659" className="">
        Fale Conosco
      </Link>
    </Button>
  )
}
