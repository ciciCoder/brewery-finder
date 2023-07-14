import BreweryList, { Brewery } from '@/components/ui/brewery-list'
import axios from 'axios'

interface HomeProps {
  searchParams: {
    page: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const { page = '1' } = searchParams
  const { data } = await axios.get<Brewery[]>(
    'https://api.openbrewerydb.org/v1/breweries',
    { params: { page, per_page: 8 } },
  )
  return (
    <main>
      <BreweryList list={data} page={Number(page)} />
    </main>
  )
}
