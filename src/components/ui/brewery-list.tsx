'use client'

import React, { useEffect, useReducer, useRef, useState } from 'react'
import BrewerySearch from './brewery-search'
import BreweryCard from './brewery-card'
import { Button } from './button'
import { useRouter, useSearchParams } from 'next/navigation'
import ThreeDotsAnimated from '../svg/three-dots-animated'

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

export interface BreweryListProps {
  list: Brewery[]
}

type LoadingState = {
  next: boolean
  prev: boolean
  search: boolean
}

function BreweryList({ list }: BreweryListProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useReducer(
    (prev: LoadingState, next: { [key in keyof LoadingState]?: boolean }) => ({
      ...prev,
      ...next,
    }),
    {
      next: false,
      prev: false,
      search: false,
    },
  )

  const queryParams = new URLSearchParams(searchParams.toString())
  const query = searchParams.get('query') ?? ''
  const page = Number(searchParams.get('page') ?? 1)

  const getBreweryAddress = (brewery: Brewery) =>
    [
      brewery.address_1,
      brewery.city,
      brewery.state_province,
      brewery.country,
    ].join(', ')

  const isLoading = (Object.keys(loading) as Array<keyof typeof loading>).some(
    (item) => loading[item],
  )
  const handleNext = () => {
    if (isLoading) return
    setLoading({ next: true })
    queryParams.set('page', String(page + 1))
    router.push(`/?${queryParams}`)
  }

  const handlePrev = () => {
    if (isLoading) return
    setLoading({ prev: true })
    queryParams.set('page', String(page - 1))
    router.push(`/?${queryParams}`)
  }

  const handleSearch = (searchVal: string) => {
    if (isLoading) return
    if (searchVal === searchParams.get('query')) return
    queryParams.set('page', '1')
    queryParams.set('query', searchVal)
    if (!searchVal) queryParams.delete('query')
    setLoading({ search: true })
    router.push(`/?${queryParams}`)
  }

  useEffect(() => {
    setLoading({ prev: false, next: false, search: false })
  }, [list])

  const loaderSVG = (text: string, loading: boolean) =>
    loading ? (
      <ThreeDotsAnimated className="fill-primary-foreground" width={24} />
    ) : (
      text
    )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <BrewerySearch
            value={query}
            onClick={handleSearch}
            loading={loading.search}
          />
        </div>
        <div className="flex gap-1">
          {list.length >= 8 && (
            <Button className="btn btn-primary" onClick={handleNext}>
              {loaderSVG('Next', loading.next)}
            </Button>
          )}
          {page > 1 && (
            <Button className="btn btn-primary" onClick={handlePrev}>
              {loaderSVG('Prev', loading.prev)}
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {list.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            id={brewery.id}
            name={brewery.name}
            type={brewery.brewery_type}
            address={getBreweryAddress(brewery)}
            url={brewery.website_url}
          />
        ))}
      </div>
    </div>
  )
}

export default BreweryList
