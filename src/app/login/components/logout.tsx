import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthPrivider'

export const Logout = () => {
  const { logout } = useAuth()
  return <Button onClick={logout}>Sair</Button>
}
