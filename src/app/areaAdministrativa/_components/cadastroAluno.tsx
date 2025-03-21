import { TypeAluno } from '@/app/types/typesAluno'
import { useEffect, useState } from 'react'
import { ListagemAluno } from './listagemAluno'

export const CadastroAluno = () => {
  const [alunos, setAlunos] = useState<TypeAluno[]>([])
  const [atualizaAluno, setAtualizaAluno] = useState(false)

  useEffect(() => {
    fetch('/api/alunos')
      .then((res) => res.json())
      .then((DadosAluno) => {
        const soAlunos = DadosAluno.filter((aluno: TypeAluno) => aluno.is_aluno && !aluno.is_adm)
        setAlunos(soAlunos)
      })
  }, [])
  function deletarAluno(aluno: TypeAluno) {
    const novaListaSemAlunoDeletado = alunos.filter((alunoIndex) => alunoIndex != aluno)
    setAlunos(novaListaSemAlunoDeletado)
  }
  console.log(alunos)
  return (
    <div>
      <div>
        <ListagemAluno alunos={alunos} deletarAluno={deletarAluno} />
      </div>
    </div>
  )
}
