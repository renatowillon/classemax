import { TypeAluno } from '@/app/types/typesAluno'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Eye, EyeOff, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ListagemAlunoProps {
  alunos: TypeAluno[]
  deletarAluno: (aluno: TypeAluno) => void
}

export const ListagemAluno = ({ alunos, deletarAluno }: ListagemAlunoProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)
  function handleOpenModal() {
    setOpenModal(!openModal)
  }
  function showPassword() {
    setMostrarSenha(!mostrarSenha)
  }
  return (
    <div>
      {!openModal && (
        <div className="justify-self-end pr-10 pt-5">
          <Button onClick={handleOpenModal} className="self-end bg-green-500 hover:bg-green-400">
            Adicionar
          </Button>
        </div>
      )}
      {/* Modal para Edição e Criação de Alunos */}
      {openModal && (
        <div className="p-5 w-full h-full flex-col gap-3 flex items-center justify-center ">
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
            <input
              className="py-2 px-3 border border-gray-300 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="grid grid-cols-2 w-full gap-3">
            <div className="flex flex-col w-full">
              <span className="pl-3">Email</span>
              <input
                className="py-2 px-3 border border-gray-300 rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="pl-3">CPF</span>
              <input
                className="py-2 px-3 border border-gray-300 rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full gap-3">
            <div className="flex flex-col w-full">
              <span className="pl-3">Telefone</span>
              <input
                className="py-2 px-3 border border-gray-300 rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="pl-3">Turma</span>
              <input
                className="py-2 px-3 border border-gray-300 rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="pl-3">Senha</span>
              <div className="flex items-center w-full border border-gray-300 rounded-md">
                <input
                  className="py-2 px-3 w-full rounded-s-md "
                  type={mostrarSenha ? 'text' : 'password'}
                  name="pesquisa"
                  id=""
                />
                <button
                  onClick={showPassword}
                  className="py-1 px-5 rounded-e-xl bg-white text-slate-400 text-2xl"
                >
                  {mostrarSenha ? '🙉' : '🙈'}
                  {/* {mostrarSenha ? <EyeOff /> : <Eye />} */}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 py-3 items-center justify-center w-full">
            <Button className="w-[200px] h-[50px] bg-green-600 hover:bg-green-500">
              Adicionar
            </Button>

            <Button onClick={handleOpenModal} className="w-[200px] h-[50px]" variant="destructive">
              Cancelar
            </Button>
          </div>
        </div>
      )}
      {/* listagem de alunos cadastrados */}
      {!openModal && (
        <div className="">
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
                      <Button onClick={() => deletarAluno(aluno)} variant="destructive">
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
  )
}
