import { fetchBrewery } from '@/api/brewery.api'
import BreweryList from '@/components/ui/brewery-list'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'

function BreweryIndex() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? undefined
  const query = searchParams.get('query') ?? undefined
  const { data, isLoading, refetch, isRefetching } = useQuery('breweries', () =>
    fetchBrewery({ page, query }),
  )

  useEffect(() => {
    refetch()
  }, [page, query, refetch])

  return (
    <div>
      <BreweryList list={data ?? []} loading={isLoading || isRefetching} />
    </div>
  )
}

export default BreweryIndex
