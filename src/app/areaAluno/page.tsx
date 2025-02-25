'use client'
import { DireitosAutorais } from '@/components/direitosAutorais'
import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/context/AuthPrivider'
import { AlignJustify } from 'lucide-react'
import { PerfilUsuario } from '../login/components/perfilUsuario'
import { ScrollArea } from '@/components/ui/scroll-area'
import { QuadroDeAvisos } from '@/components/padroes/quadroDeAvisos'

const AreaAluno = () => {
  const { aluno, logout } = useAuth()
  console.log(aluno?.nome)

  // //validação de autenticação
  // if (!aluno) {
  //   redirect('/login')
  // }

  return (
    <div className="w-full h-full bg-slate-200">
      <Header />
      <div className="bg-slate-50 m-5 rounded-md p-3 flex items-center justify-between px-10">
        <div>
          <AlignJustify />
        </div>
        <div className="flex items-center gap-2">
          <p>Olá</p>
          <div>
            {aluno ? (
              <div className="flex gap-2 items-center">
                <PerfilUsuario />
              </div>
            ) : (
              'Visitante'
            )}
          </div>
        </div>
      </div>

      <Tabs defaultValue="home" className="flex flex-row gap-5 pb-5 w-full">
        <div className="px-5 grid grid-cols-5 gap-5 w-full h-full">
          <aside className="col-span-1">
            <TabsList className="flex-col gap-3 w-full p-3 bg-slate-50">
              <div className="font-bold flex flex-col items-center justify-center py-5">
                Portal do Aluno
              </div>
              <Separator />
              <TabsTrigger value="home" className="w-full p-3 bg-slate-50  ">
                Quadro de Avisos
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
              {aluno?.is_adm == true && (
                <>
                  <TabsTrigger value="alunos" className="w-full p-3 bg-slate-50">
                    Alunos
                  </TabsTrigger>
                  <TabsTrigger value="disciplinas" className="w-full p-3 bg-slate-50">
                    Disciplinas
                  </TabsTrigger>
                </>
              )}
            </TabsList>
          </aside>
          <div className="col-span-4">
            <TabsContent value="home" className="p-5 bg-slate-50 rounded-lg min-h-[450px]">
              <div className="">
                <ScrollArea>
                  <QuadroDeAvisos />
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="notas" className="p-5 bg-slate-50 rounded-lg min-h-[450px]">
              <h1 className="pb-3 pl-3 text-lg">Notas</h1>
              <Separator />
              <div className="py-3">Conteudo Principal</div>
            </TabsContent>
            <TabsContent value="financeiro" className="p-5 bg-slate-50 rounded-lg min-h-[450px]">
              <h1 className="pb-3 pl-3 text-lg">Financeiro</h1>
              <Separator />
              <div className="py-3">Conteudo Principal</div>
            </TabsContent>
            <TabsContent value="secretaria" className="p-5 bg-slate-50 rounded-lg min-h-[450px]">
              <h1 className="pb-3 pl-3 text-lg">Secretaria</h1>
              <Separator />
              <div className="py-3">Conteudo Principal</div>
            </TabsContent>
            {aluno?.is_adm == true && (
              <>
                <TabsContent value="alunos" className="p-5 bg-slate-50 rounded-lg min-h-[450px]">
                  <h1 className="pb-3 pl-3 text-lg">Alunos</h1>
                  <Separator />
                  <div className="py-3">Conteudo Principal</div>
                </TabsContent>
                <TabsContent
                  value="disciplinas"
                  className="p-5 bg-slate-50 rounded-lg min-h-[450px]"
                >
                  <h1 className="pb-3 pl-3 text-lg">Disciplinas</h1>
                  <Separator />
                  <div className="py-3">Conteudo Principal</div>
                </TabsContent>
              </>
            )}
          </div>
        </div>
      </Tabs>
      <footer className="bg-gray-800 mt-5">
        <DireitosAutorais />
      </footer>
    </div>
  )
}
export default AreaAluno
