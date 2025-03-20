import { Separator } from '@/components/ui/separator'

interface TitleProps {
  title: string
}
export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <p className="p-5 font-bold text-2xl text-slate-800">{title}</p>
    </div>
  )
}
