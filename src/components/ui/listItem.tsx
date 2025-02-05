import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ListItemProps {
  href: string
  title: string
  children: React.ReactNode
  className?: string
}

export function ListItem({ href, title, children, className }: ListItemProps) {
  return (
    <li className={cn('p-4 border-b last:border-none', className)}>
      <Link href={href} className="block hover:text-blue-600">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{children}</p>
      </Link>
    </li>
  )
}
