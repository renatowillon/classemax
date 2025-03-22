'use client'

import { useState } from 'react'
import { ListaUsuarios } from '../_components/ListaUsuarios'
import { Title } from '../_components/title'

import { FormUsuario } from '../_components/FormUsuario'
import { Button } from '@/components/ui/button'
import { UsuariosTypes } from '@/types/UsuariosTypes'
import { Usuarios } from '@/constants/Usuarios'

const CadastroUsuarios = () => {
  const [usuarioAtual, setUsuarioAtual] = useState<Partial<UsuariosTypes> | null>(null)
  const [usuarios, setUsuarios] = useState<UsuariosTypes[]>(Usuarios)

  function removerUsuario(usuario: UsuariosTypes) {
    const usuariosFiltrados = usuarios.filter((u) => u.id !== usuario.id)
    setUsuarios(usuariosFiltrados)
  }

  function alterarUsuario(usuario: Partial<UsuariosTypes>) {
    setUsuarioAtual(usuario)
  }

  function cancelar() {
    setUsuarioAtual(null)
  }

  function novoUsuario() {
    alterarUsuario({ id: (usuarios.length + 1).toString() })
  }

  function salvarUsuario() {
    const usuarioExistente = usuarios.find((u) => u.id === usuarioAtual?.id)
    if (usuarioExistente) {
      const novosUsuarios = usuarios.map((u) => {
        return u.id === usuarioAtual?.id ? usuarioAtual : u
      })
      setUsuarios(novosUsuarios as UsuariosTypes[])
    } else {
      setUsuarios([...usuarios, usuarioAtual as UsuariosTypes])
    }
    setUsuarioAtual(null)
  }
  return (
    <div>
      <Title title="Cadastro de Usuarios" />
      <div className="flex flex-col pr-10 py-5">
        {usuarioAtual == null ? (
          <Button onClick={novoUsuario} className="self-end bg-green-500 hover:bg-green-400">
            Novo Usuario
          </Button>
        ) : null}
      </div>
      {usuarioAtual ? (
        <FormUsuario
          usuario={usuarioAtual}
          cancelar={cancelar}
          salvar={salvarUsuario}
          atualizarUsuario={setUsuarioAtual}
        />
      ) : (
        <ListaUsuarios
          usuarios={usuarios}
          alterarUsuario={alterarUsuario}
          removerUsuario={removerUsuario}
        />
      )}
    </div>
  )
}
export default CadastroUsuarios
