import { useForm } from 'react-hook-form'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Dispatch, SetStateAction } from 'react'

interface ModalAvisoProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setRefreshAviso: Dispatch<SetStateAction<boolean>>
  refreshAviso: boolean
}

const formSchemaAviso = z.object({
  titulo: z.string().min(5, { message: 'Titulo conter no mínimo 5 caracteres' }).max(100),
  descricao: z.string().min(5, { message: 'Descrição conter no mínimo 5 caracteres' }).max(500),
})

export const ModalAviso = ({
  isOpen,
  setIsOpen,
  setRefreshAviso,
  refreshAviso,
}: ModalAvisoProps) => {
  const onSubmit = async (values: z.infer<typeof formSchemaAviso>) => {
    //logica de adicionar os dados no banco de dados do supabase
    try {
      const response = await fetch('/api/avisos', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
          titulo: values.titulo,
          descricao: values.descricao,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar aviso')
      }

      toast.success('Aviso adicionado com sucesso!')
      form.reset()
      setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    }

    //resetar o formulario e fechar o dialog
    form.reset()
    setIsOpen(false)
  }
  const form = useForm<z.infer<typeof formSchemaAviso>>({
    resolver: zodResolver(formSchemaAviso),
    defaultValues: {
      titulo: '',
      descricao: '',
    },
  })

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
      }}
    >
      <DialogContent>
        <DialogHeader className="p-2">
          <DialogTitle className="text-slate-700">Crie seu aviso</DialogTitle>
          <DialogDescription>insira as informações abaixo</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-slate-700">Titulo do aviso</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o Titulo" {...field} autoFocus />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-slate-700">Mensagem do Aviso</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Digite o aviso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 justify-end">
              <DialogClose asChild>
                <Button onClick={() => form.reset()} variant={'destructive'}>
                  Sair
                </Button>
              </DialogClose>
              <Button
                variant={'default'}
                type="submit"
                onClick={() => setRefreshAviso(!refreshAviso)}
              >
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
