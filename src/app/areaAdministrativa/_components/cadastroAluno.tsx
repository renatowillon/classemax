'use client'
import { TypeAluno } from '@/app/types/typesAluno'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { useState } from 'react'

interface CadastroAlunoProps {
  aluno: Partial<TypeAluno>
  cancelar: () => void
  atualizarAluno: (aluno: Partial<TypeAluno>) => void
  salvar: () => void
}

export const CadastroAluno = ({ atualizarAluno, cancelar, salvar, aluno }: CadastroAlunoProps) => {
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function showPassword() {
    setMostrarSenha(!mostrarSenha)
  }

  return (
    <div>
      {/* Modal para Edição e Criação de Alunos */}

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
            value={aluno.nome ?? ''}
            onChange={(e) => atualizarAluno({ ...aluno, nome: e.target.value })}
            name=""
            id=""
          />
        </div>

        <div className="grid grid-cols-2 w-full gap-3">
          <div className="flex flex-col w-full">
            <span className="pl-3">Email</span>
            <input
              className="py-2 px-3 border border-gray-300 rounded-md"
              value={aluno.email ?? ''}
              onChange={(e) => atualizarAluno({ ...aluno, email: e.target.value })}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="pl-3">CPF</span>
            <input
              className="py-2 px-3 border border-gray-300 rounded-md"
              value={aluno.cpf ?? ''}
              onChange={(e) => atualizarAluno({ ...aluno, cpf: e.target.value })}
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
              value={aluno.telefone ?? ''}
              onChange={(e) => atualizarAluno({ ...aluno, telefone: e.target.value })}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="pl-3">Turma</span>
            <input
              className="py-2 px-3 border border-gray-300 rounded-md"
              value={aluno.turma ?? ''}
              onChange={(e) => atualizarAluno({ ...aluno, turma: e.target.value })}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="pl-3">Senha</span>
            <div className="flex items-center w-full border border-gray-300 rounded-md">
              <input
                className="py-2 px-3 w-full rounded-s-md"
                value={aluno.senha ?? ''}
                onChange={(e) => atualizarAluno({ ...aluno, senha: e.target.value })}
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
          <Button
            onClick={() => salvar()}
            className="w-[200px] h-[50px] bg-green-600 hover:bg-green-500"
          >
            Salvar
          </Button>

          <Button onClick={() => cancelar()} className="w-[200px] h-[50px]" variant="destructive">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}
