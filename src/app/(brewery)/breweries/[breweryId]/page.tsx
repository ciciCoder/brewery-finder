import BreweryDetail from '@/components/ui/brewery-detail'
import { fetchOneBrewery } from '@/lib/api'

export interface ShowBreweryProps {
  params: {
    breweryId: string
  }
}

export default async function ShowBrewery({
  params: { breweryId },
}: ShowBreweryProps) {
  const data = await fetchOneBrewery(breweryId)

  return (
    <main className="h-full w-full">
      <BreweryDetail data={data} />
    </main>
  )
}
