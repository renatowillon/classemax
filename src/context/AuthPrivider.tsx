'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Aluno } from '@/app/types/typesAluno'

// Definição dos tipos
interface AuthContextType {
  aluno: Aluno | null
  loading: boolean
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
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const alunoData = localStorage.getItem('alunos')
      if (alunoData) {
        const { data, timestamp } = JSON.parse(alunoData)
        const now = new Date().getTime()
        const sixHoursInMillis = 6 * 60 * 60 * 1000

        if (now - timestamp < sixHoursInMillis) {
          setAluno(data)
        } else {
          localStorage.removeItem('alunos')
        }
      }
      setLoading(false)
    }

    checkSession()
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
    localStorage.setItem('alunos', JSON.stringify(alunoData))
    setAluno(aluno)
    if (aluno.is_adm == true) {
      router.push('/areaAdministrativa')
      return { success: true }
    } else {
      router.push('/areaAluno')
      return { success: true }
    }
  }

  const logout = () => {
    localStorage.removeItem('alunos')
    setAluno(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ aluno, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
