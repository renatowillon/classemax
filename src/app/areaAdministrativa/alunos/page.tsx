'use client'
import { Separator } from '@/components/ui/separator'
import { Title } from '../_components/title'
import { Pesquisa } from '../_components/pesquisa'
import { CadastroAluno } from '../_components/cadastroAluno'
import { useEffect, useState } from 'react'
import { TypeAluno } from '@/app/types/typesAluno'
import { ListagemAluno } from '../_components/listagemAluno'
import { Button } from '@/components/ui/button'

const Alunos = () => {
  const [alunos, setAlunos] = useState<TypeAluno[]>([])
  const [alunoAtual, setAlunoAtual] = useState<Partial<TypeAluno> | null>(null)

  useEffect(() => {
    fetch('/api/alunos')
      .then((res) => res.json())
      .then((DadosAluno) => {
        const soAlunos = DadosAluno.filter((aluno: TypeAluno) => aluno.is_aluno && !aluno.is_adm)
        setAlunos(soAlunos)
      })
  }, [])

  function novoAluno() {
    setAlunoAtual({ id: alunos.length + 1 })
  }

  function cancelar() {
    setAlunoAtual(null)
  }

  function deletarAluno(aluno: TypeAluno) {
    const novaListaSemAlunoDeletado = alunos.filter((alunoIndex) => alunoIndex != aluno)
    setAlunos(novaListaSemAlunoDeletado)
  }

  function alterarUsuario(aluno: TypeAluno) {
    setAlunoAtual(aluno)
  }

  function salvar() {
    const alunoExistente = alunos.find((a) => a.id === alunoAtual?.id)
    if (alunoExistente) {
      const novosAlunos = alunos.map((a) => {
        return a.id === alunoAtual?.id ? alunoAtual : a
      })
      setAlunos(novosAlunos as TypeAluno[])
    } else {
      setAlunos([...alunos, alunoAtual as TypeAluno])
    }
    setAlunoAtual(null)
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title="Alunos" />
        <Pesquisa />
      </div>
      <Separator />
      {alunoAtual == null ? (
        <div className="justify-self-end pr-10 pt-5">
          <Button onClick={novoAluno} className="self-end bg-green-500 hover:bg-green-400">
            Adicionar
          </Button>
        </div>
      ) : null}
      {alunoAtual ? (
        <CadastroAluno
          aluno={alunoAtual}
          cancelar={cancelar}
          salvar={salvar}
          atualizarAluno={setAlunoAtual}
        />
      ) : (
        <ListagemAluno
          alunos={alunos}
          deletarAluno={deletarAluno}
          alterarUsuario={alterarUsuario}
        />
      )}
    </div>
  )
}
export default Alunos
