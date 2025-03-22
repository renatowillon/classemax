'use client'
import { Button } from '@/components/ui/button'
import { UsuariosTypes } from '@/types/UsuariosTypes'

export interface ListaUsuariosProps {
  usuarios: UsuariosTypes[]
  removerUsuario: (usuario: UsuariosTypes) => void
  alterarUsuario: (usuario: UsuariosTypes) => void
}

export const ListaUsuarios = ({ usuarios, alterarUsuario, removerUsuario }: ListaUsuariosProps) => {
  return (
    <ul className="flex flex-col">
      {usuarios.map((usuario) => {
        return (
          <li key={usuario.id} className="flex items-center justify-between px-10 py-2 border-b">
            <div className="flex flex-col">
              <span>{usuario.nome}</span>
              <span className="text-xs text-muted-foreground">{usuario.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => alterarUsuario(usuario)}>Alterar</Button>
              <Button onClick={() => removerUsuario(usuario)} variant={'destructive'}>
                Excluir
              </Button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
