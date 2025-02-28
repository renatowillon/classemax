'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Aluno } from '@/app/types/typesAluno'

// Definição dos tipos

interface AuthContextType {
  aluno: Aluno | null
  login: (email: string, senha: string) => Promise<{ error?: string; success?: boolean }>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

// Criando o contexto com um valor inicial válido
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [aluno, setAluno] = useState<Aluno | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedAluno = localStorage.getItem('aluno')
    if (storedAluno) {
      const parsedAluno = JSON.parse(storedAluno)
      const now = new Date().getTime()
      if (now - parsedAluno.timestamp < 6 * 60 * 60 * 1000) {
        setAluno(parsedAluno.data)
      } else {
        localStorage.removeItem('aluno')
      }
    }
  }, [])

  const login = async (email: string, senha: string) => {
    const { data: aluno, error } = await supabase
      .from('alunos')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !aluno || aluno.senha !== senha) {
      return { error: 'Email ou senha incorretos.' }
    }

    const alunoData = { data: aluno, timestamp: new Date().getTime() }
    localStorage.setItem('aluno', JSON.stringify(alunoData))
    setAluno(aluno)
    router.push('/areaAluno')
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem('aluno')
    setAluno(null)
    setTimeout(() => {
      router.push('/login')
    }, 0)
  }

  return <AuthContext.Provider value={{ aluno, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
