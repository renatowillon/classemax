interface Props {
  numero: string
  titulo: string
  descricao: string
}

export const CardCheck = ({ numero, titulo, descricao }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="h-12 w-12 text-xl bg-white rounded-full p-5 text-primary flex items-center justify-center font-black ">
        {numero}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{titulo}</h1>
        <p className="text-lg">{descricao}</p>
      </div>
    </div>
  )
}
