import { useEffect, useMemo, useReducer } from 'react'
import BrewerySearch from './brewery-search'
import BreweryCard from './brewery-card'
import { Button } from './button'
import { useAppSelector } from '@/redux/store'
import { useSearchParams } from 'react-router-dom'
import ThreeDotsAnimated from '../svg/three-dots-animated'
import { Brewery } from '@/api/brewery.api'

export interface BreweryListProps {
  list: Brewery[]
  loading: boolean
}

type LoadingState = {
  next: boolean
  prev: boolean
  search: boolean
}

function BreweryList({ list, loading }: BreweryListProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const wishlist = useAppSelector((state) => state.wishlist)
  const wishlistSet = useMemo(() => new Set([...wishlist]), [wishlist])
  const [loadingStates, setLoadingStates] = useReducer(
    (prev: LoadingState, next: { [key in keyof LoadingState]?: boolean }) => ({
      ...prev,
      ...next,
    }),
    { next: false, prev: false, search: false },
  )

  const getBreweryAddress = (brewery: Brewery) =>
    [brewery.address_1, brewery.city, brewery.state_province, brewery.country]
      .filter((item) => item)
      .join(', ')

  const page = Number(searchParams.get('page'))
  const query = searchParams.get('query') as string

  const handleNext = () => {
    if (loading) return
    setLoadingStates({ next: true })
    setSearchParams((prev) => {
      prev.set('page', String(page + 1))
      return prev
    })
  }

  const handlePrev = () => {
    if (loading) return
    setLoadingStates({ prev: true })
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.set('page', String(page - 1))
      return next
    })
  }

  const handleSearch = (searchVal: string) => {
    if (loading) return
    if (searchVal === searchParams.get('query')) return
    setLoadingStates({ search: true })
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      next.set('query', searchVal)
      next.set('page', '1')
      return next
    })
  }

  useEffect(() => {
    setLoadingStates({ prev: false, next: false, search: false })
  }, [list])

  const loaderSVG = (text: string, loading: boolean) =>
    loading ? (
      <ThreeDotsAnimated className="fill-primary-foreground" width={24} />
    ) : (
      text
    )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <div className="w-full sm:w-auto">
          <BrewerySearch
            value={query}
            onClick={handleSearch}
            loading={loadingStates.search}
          />
        </div>
        <div className="flex gap-1">
          {list.length >= 8 && (
            <Button className="btn btn-primary" onClick={handleNext}>
              {loaderSVG('Next', loadingStates.next)}
            </Button>
          )}
          {page > 1 && (
            <Button className="btn btn-primary" onClick={handlePrev}>
              {loaderSVG('Prev', loadingStates.prev)}
            </Button>
          )}
        </div>
      </div>
      {!list.length && (
        <div className="min-h-[inherit]">
          <span className="text-6xl text-muted-foreground">
            No Records Found...
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            id={brewery.id}
            name={brewery.name}
            type={brewery.brewery_type}
            address={getBreweryAddress(brewery)}
            url={brewery.website_url}
            isWish={wishlistSet.has(brewery.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default BreweryList
