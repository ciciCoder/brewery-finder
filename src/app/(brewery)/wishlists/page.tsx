'use client'

import { Brewery } from '@/components/ui/brewery-list'
import BreweryWishlist from '@/components/ui/brewery-wishlist'
import LoaderUI from '@/components/ui/loader-ui'
import { fetchBreweryByIds } from '@/lib/api'
import { useAppSelector } from '@/redux/store'
import { useQuery } from 'react-query'

export default function WishlistPage() {
  const wishlists = useAppSelector((state) => state.wishlist)
  const { data, isLoading } = useQuery('brewery-wishlist', () =>
    fetchBreweryByIds({ ids: wishlists }),
  )

  return isLoading ? (
    <div className="flex min-h-[inherit] items-center justify-center">
      <LoaderUI />
    </div>
  ) : (
    <div className="min-h-[inherit]">
      <BreweryWishlist list={data ?? []} />
    </div>
  )
}
