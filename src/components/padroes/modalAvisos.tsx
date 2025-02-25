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
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { TypeAviso } from '@/app/types/typesAvisos'

interface ModalAvisoProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setRefreshAviso: Dispatch<SetStateAction<boolean>>
  refreshAviso?: boolean
  avisoSelecionado?: TypeAviso | null
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
  avisoSelecionado,
}: ModalAvisoProps) => {
  const onSubmit = async (values: z.infer<typeof formSchemaAviso>) => {
    //logica de adicionar os dados no banco de dados do supabase
    try {
      const method = avisoSelecionado ? 'PUT' : 'POST'
      const response = await fetch('/api/avisos', {
        method: method,
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
          id: avisoSelecionado?.id,
          titulo: values.titulo,
          descricao: values.descricao,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar aviso')
      }

      toast.success(
        avisoSelecionado ? 'Aviso atualizado com sucesso!' : 'Aviso adicionado com sucesso!'
      )
      form.reset()
      setIsOpen(false)
      setRefreshAviso(!refreshAviso)
    } catch (error: any) {
      toast.error(error.message)
    }

    //resetar o formulario e fechar o dialog
    form.reset()
    setIsOpen(false)
    setRefreshAviso(!refreshAviso)
  }
  const form = useForm<z.infer<typeof formSchemaAviso>>({
    resolver: zodResolver(formSchemaAviso),
    defaultValues: {
      titulo: '',
      descricao: '',
    },
  })

  useEffect(() => {
    if (avisoSelecionado) {
      form.reset({
        titulo: avisoSelecionado.titulo,
        descricao: avisoSelecionado.descricao,
      })
    } else {
      form.reset()
    }
  }, [avisoSelecionado])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
      }}
    >
      <DialogContent>
        <DialogHeader className="p-2">
          <DialogTitle className="text-slate-700">
            {avisoSelecionado ? 'Atualize seu aviso' : 'Crie seu aviso'}{' '}
          </DialogTitle>
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
                {avisoSelecionado ? 'Atualizar' : 'Salvar'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
