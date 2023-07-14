import React from 'react'
import { Button } from './button'

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
  name: string
  type: string
  address: string
  url: string
}

function BreweryCard({ name, type, address, url }: BreweryCardProps) {
  return (
    <div className="box-border flex w-[300px] flex-col gap-3 rounded-xl border border-primary bg-secondary px-8 py-7">
      <BreweryCardField label="Name" value={name} />
      <BreweryCardField label="Type" value={type} />
      <BreweryCardField label="Address" value={address} />
      <a
        href={url}
        className="rounded-full bg-primary px-3 py-3 text-center text-primary-foreground duration-200 hover:cursor-pointer hover:bg-opacity-50"
      >
        Goto Website
      </a>
    </div>
  )
}

export default BreweryCard
