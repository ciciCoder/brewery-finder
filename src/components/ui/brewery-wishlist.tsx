'use client'

import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import BrewerySearch from './brewery-search'
import BreweryCard from './brewery-card'
import { useAppSelector } from '@/redux/store'
import 'animate.css'

export interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1: string
  city: string
  state_province: string
  country: string
  website_url: string
}

export interface BreweryWishlistProps {
  list: Brewery[]
}

type LoadingState = {
  next: boolean
  prev: boolean
  search: boolean
}

function BreweryWishlist({ list }: BreweryWishlistProps) {
  const wishlist = useAppSelector((state) => state.wishlist)
  const wishlistSet = useMemo(() => new Set([...wishlist]), [wishlist])
  const [search, setSearch] = useState('')

  const getBreweryAddress = useCallback(
    (brewery: Brewery) =>
      [brewery.address_1, brewery.city, brewery.state_province, brewery.country]
        .filter((item) => item)
        .join(', '),
    [],
  )

  const filteredWishlist = useMemo(
    () =>
      list.filter((item) => {
        if (!wishlistSet.has(item.id)) return false
        const address = getBreweryAddress(item)
        const keyword = new RegExp(search, 'i')
        const keyword2 = new RegExp(search, 'i')
        if (keyword.test(item.name) || keyword2.test(address)) return true
        return false
      }),
    [search, getBreweryAddress, list, wishlistSet],
  )

  const handleSearch = (searchVal: string) => {
    console.log('handle search')
    setSearch(searchVal)
  }

  return (
    <div className="flex min-h-[inherit] flex-col gap-4">
      <div className="flex justify-between">
        <div className="w-full sm:w-auto">
          <BrewerySearch onClick={handleSearch} />
        </div>
      </div>
      {!filteredWishlist.length && (
        <div className="min-h-[inherit]">
          <span className="text-6xl text-muted-foreground">
            No Records Found...
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {filteredWishlist.map((brewery, index) => (
          <BreweryCard
            key={brewery.id}
            id={brewery.id}
            className="animate__animated animate__flipInY sm:animate-none"
            name={brewery.name}
            style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
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

export default BreweryWishlist
