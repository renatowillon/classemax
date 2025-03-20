'use client'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const Pesquisa = () => {
  const [pesquisa, setPesquisa] = useState('')
  function handlePesquisa() {
    toast.warning(`Relaxa que ainda vai funcionar, MSG DIGITADA: ${pesquisa}`)
    setPesquisa("")
  }
  return (
    <div className="flex items-center justify-center mr-10 border rounded-xl">
      <input
        className="py-2 rounded-s-xl outline-none px-5 text-slate-400 "
        type="text"
        name="pesquisa"
        placeholder={`pesquisa`}
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        id=""
      />
      <button onClick={handlePesquisa} className="py-2 px-5 rounded-e-xl bg-white text-slate-400">
        <Search />
      </button>
    </div>
  )
}
