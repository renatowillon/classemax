'use client'
import { Separator } from '@/components/ui/separator'
import { Title } from '../_components/title'
import { Pesquisa } from '../_components/pesquisa'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Aluno } from '@/app/types/typesAluno'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'

const Alunos = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [openModal, setOpenModal] = useState(true)
  useEffect(() => {
    fetch('/api/alunos')
      .then((res) => res.json())
      .then((dados) => {
        const alunosFiltrados = dados.filter((aluno: Aluno) => aluno.is_aluno && !aluno.is_adm)
        setAlunos(alunosFiltrados)
      })
  }, [])
  console.log(alunos)

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  function handleDeleteAluno(aluno: Aluno) {
    const todosAlunos = alunos
    const alunosValidos = todosAlunos.filter((alunos: Aluno) => alunos !== aluno)
    setAlunos(alunosValidos)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title="Alunos" />
        <Pesquisa />
      </div>
      <Separator />
      <div className="w-full p-5">
        {/* menu adicionar */}
        {openModal && (
          <div className="justify-self-end">
            <Button onClick={handleOpenModal} className="self-end bg-green-500 hover:bg-green-400">
              Adicionar
            </Button>
          </div>
        )}
        {/* modal para cadastro e edição nome, email, cpf, imagem, telefone, is_aluno, is_adm, senha, turma,  */}
        {!openModal && (
          <div className="py-5 w-full h-full flex-col gap-3 flex items-center justify-center ">
            <div className="w-full flex items-center justify-center gap-5">
              <Image
                src="/imagens/fotoPerfil.png"
                width={100}
                height={100}
                alt="FotoPerfil"
                className="rounded-full"
              />
              <input
                className="file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:text-blue-100 file:font-semibold file:hover:bg-primary/90"
                type="file"
                name=""
                id=""
                disabled
              />
            </div>
            <div className="w-full flex flex-col gap-3 items-end  pr-5">
              <p className="font-semibold text-slate-600">Perfil Usuário</p>
              <div className="flex gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="administrador" />
                  <label
                    htmlFor="administrador"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Administrador
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="aluno" />
                  <label
                    htmlFor="aluno"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Aluno
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="pl-3">Nome</span>
              <input className="py-2 px-3" type="text" name="" id="" />
            </div>

            <div className="grid grid-cols-2 w-full gap-3">
              <div className="flex flex-col w-full">
                <span className="pl-3">Email</span>
                <input className="py-2 px-3" type="text" name="" id="" />
              </div>
              <div className="flex flex-col w-full">
                <span className="pl-3">CPF</span>
                <input className="py-2 px-3" type="text" name="" id="" />
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-3">
              <div className="flex flex-col w-full">
                <span className="pl-3">Telefone</span>
                <input className="py-2 px-3" type="text" name="" id="" />
              </div>
              <div className="flex flex-col w-full">
                <span className="pl-3">Turma</span>
                <input className="py-2 px-3" type="text" name="" id="" />
              </div>
              <div className="flex flex-col w-full">
                <span className="pl-3">Senha</span>
                <input className="py-2 px-3" type="password" name="" id="" />
              </div>
            </div>
            <div className="flex gap-3 py-3 items-center justify-center w-full">
              <Button className="w-[200px] h-[50px] bg-green-600 hover:bg-green-500">
                Adicionar
              </Button>

              <Button
                onClick={() => setOpenModal(true)}
                className="w-[200px] h-[50px]"
                variant="destructive"
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
        {/* listagem de alunos cadastrados */}
        {openModal && (
          <div className="py-5">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">ID</TableHead>
                  <TableHead className="text-start">Nome</TableHead>
                  <TableHead className="">Email</TableHead>
                  <TableHead className="text-center">Telefone</TableHead>
                  <TableHead className="text-center">CPF</TableHead>
                  <TableHead className="text-center">Turma</TableHead>
                  <TableHead className="text-end pr-3"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alunos.map((aluno) => (
                  <TableRow key={aluno.id}>
                    <TableCell className="text-center">{aluno.id}</TableCell>
                    <TableCell className="text-start">{aluno.nome}</TableCell>
                    <TableCell className="text-start">{aluno.email}</TableCell>
                    <TableCell className="text-center">{aluno.telefone}</TableCell>
                    <TableCell className="text-center">{aluno.cpf}</TableCell>
                    <TableCell className="text-center">2º Ano Infantil</TableCell>
                    <TableCell className="justify-items-end">
                      <div className="flex gap-3">
                        <Button>
                          <Edit />
                        </Button>
                        <Button onClick={() => handleDeleteAluno(aluno)} variant="destructive">
                          <Trash2 />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  )
}
export default Alunos
