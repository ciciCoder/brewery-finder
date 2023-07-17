'use client'

import BreweryList, { Brewery } from '@/components/ui/brewery-list'
import { fetchBrewery } from '@/lib/api'
import { usePathname, useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import HomeLoadingPage from './loading'
import { useEffect } from 'react'

export default function HomePage() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const page = searchParams.get('page') ?? undefined
  const query = searchParams.get('query') ?? undefined
  const { data, isLoading, refetch } = useQuery('breweries', () =>
    fetchBrewery({ page, query }),
  )
  useEffect(() => {
    refetch()
  }, [page, query, refetch, pathname])

  return isLoading ? (
    <HomeLoadingPage />
  ) : (
    <main>
      <BreweryList list={data ?? []} />
    </main>
  )
}
