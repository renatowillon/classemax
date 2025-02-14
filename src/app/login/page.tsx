import Image from 'next/image'
import { LogInIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Login } from './components/login'

const LoginPage = async () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center gap-3 p-8">
        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>
        <p className="mb-3 text-muted-foreground">
          O Classe Max é uma plataforma de gestão escolar utilizada para monitorar suas
          movimentações, e oferecer insights personalizados, facilitando o controle sua instituição.
        </p>

        <Login />
        <p className="mb-3 text-muted-foreground flex items-center justify-center">Ou</p>
        <Button variant={'outline'}>
          <LogInIcon className="mr-2" /> Faça Login ou criar conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src="/imagens/loginPage3.png" alt="Faça Login" fill className="object-cover" />
      </div>
    </div>
  )
}
export default LoginPage
