import { Brewery } from '@/components/ui/brewery-list'
import axios from 'axios'

interface FetchBreweryParams {
  page: string
  query: string
}

export const fetchBrewery = async ({ query, page }: FetchBreweryParams) => {
  const params = new URLSearchParams()

  params.append('per_page', '8')
  page && params.append('page', page)
  query && params.append('query', query)

  const queryString = params.toString()

  const url = query
    ? `https://api.openbrewerydb.org/v1/breweries/search?${queryString}`
    : `https://api.openbrewerydb.org/v1/breweries?${queryString}`
  const res = await fetch(url, {
    method: 'GET',
    // next: {
    //   // revalidate: 3600,
    // },
  })
  const data = (await res.json()) as Brewery[]
  return data ?? []
}
