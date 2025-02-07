import { Banner } from '@/components/banner'
import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Separator />
      <div className="grid grid-cols-3 h-36 text-center items-center">
        <div>conteudo em 3 grids, conteudo a definir</div>
        <div className="border-x-2">conteudo em 3 grids, conteudo a definir</div>
        <div>conteudo em 3 grids, conteudo a definir</div>
      </div>
      <Separator />
    </div>
  )
}
export default Home
