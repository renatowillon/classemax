import { DireitosAutorais } from '@/components/direitosAutorais'

import { Header } from '@/components/header'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { auth } from '@clerk/nextjs/server'
import { TabsContent } from '@radix-ui/react-tabs'
import { redirect } from 'next/navigation'

type typeAluno = {
  id: number
  data_cadastro: Date
  nome: string
  turma: string
  status_pagamento: string
  email: string
  senha: string
  user_id: string
}

const AreaAluno = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="w-full h-full bg-slate-200">
      <Header />
      <div className="bg-slate-50 m-5 rounded-md p-3">Area do Aluno seja bem vindo: AlunoName</div>
      <div className="px-5 inline-flex h-screen">
        <Tabs className="flex flex-row gap-5 h-full w-full">
          <aside className="">
            <TabsList className="flex-col w-80 gap-3 p-3 bg-slate-50">
              <TabsTrigger value="home" className="w-full p-3 bg-slate-50">
                Home
              </TabsTrigger>
              <TabsTrigger value="notas" className="w-full p-3 bg-slate-50">
                Notas
              </TabsTrigger>
              <TabsTrigger value="financeiro" className="w-full p-3 bg-slate-50">
                Financeiro
              </TabsTrigger>
              <TabsTrigger value="secretaria" className="w-full p-3 bg-slate-50">
                Secretaria
              </TabsTrigger>
            </TabsList>
          </aside>
          <div className="">
            <TabsContent value="home" className="p-5 ">
              Avisos
            </TabsContent>
            <TabsContent value="notas" className="p-5 ">
              Notas
            </TabsContent>
            <TabsContent value="financeiro" className="p-5 ">
              Financeiro
            </TabsContent>
            <TabsContent value="secretaria" className="p-5 ">
              Secretaria
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {/* <footer className="bg-gray-800">
        <DireitosAutorais />
      </footer> */}
    </div>
  )
}
export default AreaAluno
