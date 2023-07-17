import BreweryDetail from '@/components/ui/brewery-detail'
import { fetchOneBrewery } from '@/lib/api'

export interface ShowBreweryProps {
  params: {
    breweryId: string
  }
}

export const dynamic = 'force-static'

export default async function ShowBreweryPage({
  params: { breweryId },
}: ShowBreweryProps) {
  const data = await fetchOneBrewery(breweryId)

  return (
    <main className="h-full w-full">
      <BreweryDetail data={data} />
    </main>
  )
}
