'use client'

import BreweryDetail from '@/components/ui/brewery-detail'
import { fetchOneBrewery } from '@/lib/api'
import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'
import HomeLoadingPage from '../../loading'
import ErrorPage from '../../error'

export interface ShowBreweryProps {
  params: {
    breweryId: string
  }
}

export default function ShowBreweryPage() {
  const { breweryId } = useParams()
  const { data, isLoading } = useQuery('brewery', () =>
    fetchOneBrewery(breweryId),
  )

  return isLoading ? (
    <HomeLoadingPage />
  ) : (
    <>
      {data ? (
        <main className="min-h-[inherit] w-full">
          <BreweryDetail data={data} />
        </main>
      ) : (
        <div className="flex min-h-[inherit]  w-full items-center justify-center">
          <h2 className="text-6xl text-muted-foreground">Not Found</h2>
        </div>
      )}
    </>
  )
}
