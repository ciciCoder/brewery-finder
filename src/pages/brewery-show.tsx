import { fetchOneBrewery } from '@/api/brewery.api'
import BreweryDetail from '@/components/ui/brewery-detail'
import LoaderUI from '@/components/ui/loader-ui'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function BreweryShow() {
  const { breweryId } = useParams()
  const { data, isLoading } = useQuery('brewery', () =>
    fetchOneBrewery(breweryId),
  )
  return (
    <main className="min-h-[inherit] w-full">
      {isLoading ? (
        <div className="flex min-h-[inherit] items-center justify-center">
          <LoaderUI />
        </div>
      ) : (
        data && <BreweryDetail data={data} />
      )}
    </main>
  )
}

export default BreweryShow
