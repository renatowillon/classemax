'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: 'Usuario deve ter no minimo 2 caracteres.',
  }),
  senha: z.string().min(3),
})

export const Login = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError('') // Reseta o erro ao enviar o formulário

    // Busca aluno pelo email
    const { data: alunos, error } = await supabase
      .from('alunos')
      .select('*')
      .eq('email', values.email)
      .single() // Pegamos apenas um usuário

    if (error || !alunos) {
      setError('Email ou senha incorretos.')
      return toast.error('Email ou senha incorretos. Revise seus dados e tente novamente.')
    }

    // Verifica se a senha está correta
    if (alunos.senha !== values.senha) {
      setError('Email ou senha incorretos.')
      return toast.error('Email ou senha incorretos. Revise seus dados e tente novamente.')
    }

    // Armazena os dados do aluno no localStorage
    localStorage.setItem('alunoNome', alunos.nome)
    toast.success('Login efetuado com sucesso! Redirecionando...')
    // Redireciona para a página de dashboard
    console.log('Login efetuado com sucesso!')
    router.push('/areaAluno')
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Digite Usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="Digite sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  )
}
