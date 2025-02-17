import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthPrivider'
import { supabase } from '@/lib/supabase'
import { zodResolver } from '@hookform/resolvers/zod'
import { Power, UserCog } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(3),
  nome: z.string().min(2),
  telefone: z.string().min(11),
})

export const PerfilUsuario = () => {
  const { aluno, logout } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
    },
  })

  useEffect(() => {
    if (aluno) {
      form.reset({
        nome: aluno.nome || '',
        email: aluno.email || '',
        senha: '',
        telefone: aluno.telefone || '',
      })
    }
  }, [aluno, form])

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const { error } = await supabase
        .from('alunos')
        .update({
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          senha: data.senha,
        })
        .eq('id', aluno?.id)
      if (error) {
        throw error
      }
      toast.success('Dados Alterados com Sucesso!')
    } catch (err) {
      console.log(err)
      toast.error('Erro ao atualizar os dados.')
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-3">
          <span className="sr-only">Open menu</span>

          {aluno && (
            <div className="flex items-center gap-2">
              <h1>{aluno.nome}</h1>
              <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{aluno.nome}</AvatarFallback>
              </Avatar>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex items-center gap-3">
            <div>
              <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{aluno?.nome}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-700">{aluno?.nome}</p>
              <p className="text-xs font-thin text-slate-700">{aluno?.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center justify-between px-3 text-sm text-slate-700 py-3 hover:bg-slate-100 rounded-md cursor-pointer ">
              <div>Preferencias</div>{' '}
              <div>
                <UserCog size={15} />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent forceMount>
            <DialogHeader>
              <DialogTitle className="text-slate-600 text-md">Preferências do Usuário</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div>
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>{aluno?.nome}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Digite seu nome"
                                {...field}
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="Email"
                                placeholder="Digite seu Email"
                                {...field}
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Telefone"
                                {...field}
                                value={field.value}
                                onChange={field.onChange}
                              />
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
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Nova Senha"
                                {...field}
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4 justify-end">
                  <DialogClose asChild>
                    <Button variant={'destructive'}>Sair</Button>
                  </DialogClose>
                  <Button variant={'default'} type="submit">
                    Salvar
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={logout}
          className="flex items-center justify-between px-3 text-slate-700 cursor-pointer"
        >
          <p>Sair</p>{' '}
          <span>
            <Power size={15} />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
