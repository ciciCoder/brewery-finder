import BreweryList, { Brewery } from '@/components/ui/brewery-list'
import { fetchBrewery } from '@/lib/api'

interface HomeProps {
  searchParams: {
    page: string
    query: string
  }
}

const revalidate = 10

export default async function Home({ searchParams }: HomeProps) {
  const data = await fetchBrewery(searchParams)
  return (
    <main>
      <BreweryList list={data} />
    </main>
  )
}
