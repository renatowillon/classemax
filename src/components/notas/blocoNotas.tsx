interface blocoNotasProps {
  disciplina: string
  media1: number
  media2: number
  media3: number
  media4: number
  mediaGeral: number
}

export const BlocoNotas = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-[200px] border rounded-lg">
        <div className="flex items-center justify-center font-bold bg-green-500 p-3 rounded-t-md text-green-100">
          Portugues
        </div>
        <div className="flex flex-col items-center justify-center bg-green-100">
          <div className="font-semibold text-sm text-muted-foreground">Media Geral</div>
          <div className="font-bold text-4xl text-zinc-900">8.5</div>
        </div>
        <div className="grid grid-cols-4 text-center gap-2 items-center justify-between px-3 bg-green-500 rounded-b-md">
          <div className="p-1">8.5</div>
          <div className="p-1">8.5</div>
          <div className="p-1">8.5</div>
          <div className="p-1">8.5</div>
        </div>
      </div>
    </div>
  )
}
