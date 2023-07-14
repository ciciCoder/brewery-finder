import BreweryList from '@/components/ui/brewery-list'
import axios from 'axios'

export default async function Home() {
  return (
    <main>
      <BreweryList />
    </main>
  )
}
