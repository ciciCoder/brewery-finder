import BreweryWishlist from '@/components/ui/brewery-wishlist'
import { fetchBrewery } from '@/lib/api'

export default async function Wishlists() {
  const data = await fetchBrewery({})

  return (
    <div>
      <BreweryWishlist list={data} />
    </div>
  )
}
