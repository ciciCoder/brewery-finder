import { BreweryDetail } from '@/components/ui/brewery-detail'
import { Brewery } from '@/components/ui/brewery-list'

interface FetchBreweryParams {
  page: string
  query: string
}

export const fetchBrewery = async ({ query, page }: FetchBreweryParams) => {
  const params = new URLSearchParams()

  params.append('per_page', '8')
  params.append('page', page ?? '1')
  query && params.append('query', query)

  const queryString = params.toString()

  const url = query
    ? `https://api.openbrewerydb.org/v1/breweries/search?${queryString}`
    : `https://api.openbrewerydb.org/v1/breweries?${queryString}`
  const res = await fetch(url, {
    method: 'GET',
  })
  const data = (await res.json()) as Brewery[]
  return data ?? []
}

export const fetchOneBrewery = async (breweryId: string) => {
  const url = `https://api.openbrewerydb.org/v1/breweries/${breweryId}`
  const res = await fetch(url, { method: 'GET' })
  const data = (await res.json()) as BreweryDetail
  if (!data) throw new Error('brewery found')
  return data
}
