import { fetchBreweryByIds } from '@/api/brewery.api'
import BreweryWishlist from '@/components/ui/brewery-wishlist'
import LoaderUI from '@/components/ui/loader-ui'
import { useAppSelector } from '@/redux/store'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

function BreweryWishlistPage() {
  const wishlists = useAppSelector((state) => state.wishlist)
  const { data, isLoading } = useQuery('brewery-wishlist', () =>
    fetchBreweryByIds({ ids: wishlists }),
  )
  return (
    <div className="min-h-[inherit]">
      {isLoading ? (
        <div className="flex min-h-[inherit] items-center justify-center">
          <LoaderUI />
        </div>
      ) : (
        <BreweryWishlist list={data ?? []} />
      )}
    </div>
  )
}

export default BreweryWishlistPage
