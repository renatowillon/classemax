import Image from 'next/image'
import { Home, LogInIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const LoginPage = async () => {
  const { userId } = await auth()
  if (userId) {
    redirect('/areaAluno')
  }

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center gap-3 p-8">
        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>
        <p className="mb-3 text-muted-foreground">
          O Classe Max é uma plataforma de gestão escolar utilizada para monitorar suas
          movimentações, e oferecer insights personalizados, facilitando o controle sua instituição.
        </p>

        {/* <div className="flex items-center justify-center">
          <SignIn />
        </div> */}
        <SignInButton>
          <Button>
            <LogInIcon /> Faça login ou criar conta
          </Button>
        </SignInButton>

        <Button variant={'outline'}>
          <Link href="/" className="flex gap-2 items-center">
            <Home /> Ir para página inicial
          </Link>
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src="/imagens/loginPage3.png" alt="Faça Login" fill className="object-cover" />
      </div>
    </div>
  )
}
export default LoginPage
