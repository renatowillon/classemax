import { TypeAluno } from '@/app/types/typesAluno'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Eye, EyeOff, Trash2 } from 'lucide-react'
interface ListagemAlunoProps {
  alunos: TypeAluno[]
  deletarAluno: (aluno: TypeAluno) => void
  alterarUsuario: (aluno: TypeAluno) => void
}

export const ListagemAluno = ({ alunos, deletarAluno, alterarUsuario }: ListagemAlunoProps) => {
  return (
    <div>
      {/* listagem de alunos cadastrados */}

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
                    <Button onClick={() => alterarUsuario(aluno)}>
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
    </div>
  )
}
