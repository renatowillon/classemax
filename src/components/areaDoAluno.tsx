import Link from 'next/link'
import { Button } from './ui/button'

export const AreaDoAluno = () => {
  return (
    <Button className="bg-yellow-400 text-black rounded-full p-6 hover:bg-secondary">
      <Link href="/login">Área do Aluno</Link>
    </Button>
  )
}
