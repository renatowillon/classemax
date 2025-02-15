import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
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
import { useAuth } from '@/context/AuthPrivider'
import { Power, UserCog } from 'lucide-react'

export const PerfilUsuario = () => {
  const { aluno, logout } = useAuth()
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Preferências do Usuário</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </DialogDescription>
            </DialogHeader>
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
