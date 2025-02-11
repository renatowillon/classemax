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
        <div className="p-4">
          <p>Icone</p>
          <p>Creative Learning</p>
          <p>Your child has numerous ways to learn,the gamified way!.</p>
        </div>
        <div className="border-x-2 p-4">
          <p>Icone</p>
          <p>Cognitive Development</p>
          <p>Boost your child’s cognitive development with several hands-on activities.</p>
        </div>
        <div className="p-4">
          <p>ICone</p>
          <p>Various Activities</p>
          <p>Several diverse activities in a box to explore!</p>
        </div>
      </div>
      <Separator />
    </div>
  )
}
export default Home
