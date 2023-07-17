import axios from 'axios'

export interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1: string
  city: string
  state_province: string
  postal_code: string
  country: string
  longitude: string
  latitude: string
  phone: string
  website_url: string
}

interface FetchBreweryProps {
  page?: string
  query?: string
}

export const fetchBrewery = async ({ query, page }: FetchBreweryProps) => {
  const params = {
    page,
    query,
    per_page: 8,
  }
  const url = query
    ? 'https://api.openbrewerydb.org/v1/breweries/search'
    : 'https://api.openbrewerydb.org/v1/breweries'
  const { data } = await axios.get<Brewery[]>(url, { params })
  return data
}

interface FetchBreweryByIdsProps {
  ids: Brewery['id'][]
}

export const fetchBreweryByIds = async ({ ids }: FetchBreweryByIdsProps) => {
  const params = { by_ids: ids }
  const url = 'https://api.openbrewerydb.org/v1/breweries'
  const { data } = await axios.get<Brewery[]>(url, { params })
  return data
}

export const fetchOneBrewery = async (breweryId?: string) => {
  if (!breweryId) throw new Error('no brewery found')
  const params = { by_id: breweryId }
  const url = `https://api.openbrewerydb.org/v1/breweries/${breweryId}`
  const { data } = await axios.get<Brewery>(url, { params })
  return data
}
