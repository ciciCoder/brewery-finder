import React from 'react'
import { Button } from './button'
import Link from 'next/link'

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

export interface BreweryCardProps {
  id: string
  name: string
  type: string
  address: string
  url: string
}

function BreweryCard({ id, name, type, address, url }: BreweryCardProps) {
  return (
    <div className="box-border flex  h-full w-full flex-col gap-3 rounded-xl border border-primary bg-secondary px-8 py-7">
      <BreweryCardField label="Name" value={name} />
      <BreweryCardField label="Type" value={type} />
      <BreweryCardField label="Address" value={address} />
      <div className="flex w-full gap-3">
        <a href={url} className="btn btn-primary">
          Goto Website
        </a>
        <Link className="btn btn-primary" href={`/breweries/${id}`}>
          Detail
        </Link>
      </div>
    </div>
  )
}

export default BreweryCard
