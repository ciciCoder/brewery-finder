'use client'

import React, { useEffect, useState } from 'react'
import BrewerySearch from './brewery-search'
import BreweryCard from './brewery-card'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
  page: number
}

function BreweryList({ list, page }: BreweryListProps) {
  const router = useRouter()
  const [nextLoading, setNextLoading] = useState(false)
  const [prevLoading, setPrevLoading] = useState(false)

  const getBreweryAddress = (brewery: Brewery) =>
    [
      brewery.address_1,
      brewery.city,
      brewery.state_province,
      brewery.country,
    ].join(', ')

  const handleNext = () => {
    if (prevLoading) return
    setNextLoading(true)
    router.push(`/?page=${page + 1}`)
  }

  const handlePrev = () => {
    if (nextLoading) return
    setPrevLoading(true)
    router.push(`/?page=${page - 1}`)
  }

  useEffect(() => {
    setNextLoading(false)
    setPrevLoading(false)
  }, [page])

  const loaderSVG = (text: string, loading: boolean) =>
    loading ? (
      <Image
        src="/loaders/three-dots-white.svg"
        alt="loader"
        width={24}
        height={24}
      />
    ) : (
      text
    )
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <BrewerySearch />
        <div className="flex gap-1">
          <Button className="btn btn-primary" onClick={handleNext}>
            {loaderSVG('Next', nextLoading)}
          </Button>
          {page > 1 && (
            <Button className="btn btn-primary" onClick={handlePrev}>
              {loaderSVG('Prev', prevLoading)}
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {list.map((brewery) => (
          <BreweryCard
            key={brewery.id}
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
