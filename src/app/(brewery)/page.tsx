import BreweryList, { Brewery } from '@/components/ui/brewery-list'
import { fetchBrewery } from '@/lib/api'

interface HomeProps {
  searchParams: {
    page: string
    query: string
  }
}

export const dynamic = 'force-static'

export default async function HomePage({ searchParams }: HomeProps) {
  const data = await fetchBrewery(searchParams)
  return (
    <main>
      <BreweryList list={data} />
    </main>
  )
}
