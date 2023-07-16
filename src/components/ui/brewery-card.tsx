'use client'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { Globe, Star } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { addWish, removeWish } from '@/redux/slices/wishlist.slice'
import { cx } from 'class-variance-authority'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import { Tooltip, TooltipContent } from './tooltip'

export function BreweryCardField({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <div>
      <span>{label}</span>
      <div className="line-clamp-2 rounded-full bg-white px-4 text-justify">
        {value}
      </div>
    </div>
  )
}

export type BreweryCardProps = {
  id: string
  name: string
  type: string
  address: string
  url: string
  isWish: boolean
} & JSX.IntrinsicElements['div']

function BreweryCard({
  id,
  name,
  type,
  address,
  url,
  isWish,
  className,
  ...attrs
}: BreweryCardProps) {
  const dispatch = useAppDispatch()

  const onWishlistClick = () => {
    if (!isWish) return dispatch(addWish(id))
    dispatch(removeWish(id))
  }

  return (
    <div
      className={cx(
        'box-border flex  h-full w-full flex-col justify-between gap-3 rounded-xl border border-primary bg-secondary px-8 py-7',
        className,
      )}
      {...attrs}
    >
      <div>
        <BreweryCardField label="Name" value={name} />
        <BreweryCardField label="Type" value={type} />
        <BreweryCardField label="Address" value={address} />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <a href={url} className="btn btn-primary">
            <Globe />
          </a>
          <Link className="btn btn-primary" href={`/breweries/${id}`}>
            Detail
          </Link>
        </div>
        <Tooltip>
          <TooltipTrigger
            className="bg-transparent duration-200 hover:bg-none"
            onClick={onWishlistClick}
          >
            <Star
              className={cx(
                'stroke-black hover:stroke-slate-800',
                isWish && 'fill-tertiary',
              )}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{!isWish ? 'Add to wishlist' : 'Remove from wishlist'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default BreweryCard
