import { AulasPopulares } from '@/components/aulas'
import { Banner } from '@/components/banner'
import { Blocos } from '@/components/blocos'
import { CheckSite } from '@/components/checkSite'
import { Header } from '@/components/header'
import { Sobre } from '@/components/sobre'
import { Separator } from '@/components/ui/separator'

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Separator />
      <Blocos />
      <Separator />
      <Sobre />
      <Separator />
      <AulasPopulares />
      <CheckSite />
    </div>
  )
}
export default Home
