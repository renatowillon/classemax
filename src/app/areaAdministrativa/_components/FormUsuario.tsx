import { Button } from '@/components/ui/button'
import { UsuariosTypes } from '@/types/UsuariosTypes'

export interface FormUsuarioProps {
  usuario: Partial<UsuariosTypes>
  cancelar: () => void
  atualizarUsuario: (usuario: Partial<UsuariosTypes>) => void
  salvar: () => void
}

export const FormUsuario = ({ usuario, cancelar, atualizarUsuario, salvar }: FormUsuarioProps) => {
  return (
    <div className="p-5 flex flex-col gap-3">
      <div className="flex flex-col">
        <span>Nome:</span>
        <input
          className="py-3 px-2 rounded-md border"
          value={usuario.nome ?? ''}
          onChange={(e) => atualizarUsuario({ ...usuario, nome: e.target.value })}
          type="text"
          name="Nome"
          id=""
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <span>Email:</span>
          <input
            className="py-3 px-2 rounded-md border"
            value={usuario.email ?? ''}
            onChange={(e) => atualizarUsuario({ ...usuario, email: e.target.value })}
            type="text"
            name="Email"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <span>Senha:</span>
          <input
            className="py-3 px-2 rounded-md border"
            value={usuario.senha ?? ''}
            onChange={(e) => atualizarUsuario({ ...usuario, senha: e.target.value })}
            type="password"
            name="Senha"
            id=""
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button onClick={() => salvar()} className="bg-green-500 hover:bg-green-400">
          Salvar
        </Button>
        <Button onClick={() => cancelar()} variant={'destructive'}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
