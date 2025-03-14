import { SumaryCard } from './_components/sumaryCard'
import { Title } from './_components/title'

const Dashboard = () => {
  return (
    <div>
      <Title title="Dashboard" />
      <div className="grid grid-cols-4 gap-5 p-5">
        <SumaryCard />
        <SumaryCard />
        <SumaryCard />
        <SumaryCard />
      </div>
    </div>
  )
}
export default Dashboard
