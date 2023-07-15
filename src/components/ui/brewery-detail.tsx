'use client'
import Link from 'next/link'
import React from 'react'
import './brewery-detail.css'

export interface BreweryDetail {
  id: string
  name: string
  brewery_type: string
  address_1: string
  city: string
  state_province: string
  postal_code: string
  country: string
  longitude: string
  latitude: string
  phone: string
  website_url: string
}

function BreweryDetail({ data }: { data: BreweryDetail }) {
  return (
    <div className="BreweryDetail h-full w-full">
      <div className="flex justify-between">
        <Link className="btn-prev" href="/">
          &lt;-
        </Link>
        <span className="title-header uppercase">(405) Brewing Co</span>
        <span>&nbsp;</span>
      </div>
      <div className="flex gap-3">
        <div className="grid w-full grid-cols-2 gap-3">
          <div className="text-field">
            <div className="text-label">Brewery type:</div>
            <span className="text-detail">{data.brewery_type}</span>
          </div>
          <div className="text-field">
            <span className="text-label">Street:</span>
            <span className="text-detail">{data.address_1}</span>
          </div>
          <div className="text-field">
            <span className="text-label">City:</span>
            <span className="text-detail">{data.city}</span>
          </div>
          <div className="text-field">
            <span className="text-label">State/Province:</span>
            <span className="text-detail">{data.state_province}</span>
          </div>
          <div className="text-field">
            <span className="text-label">Phone:</span>
            <span className="text-detail">{data.phone}</span>
          </div>
          <div className="text-field">
            <span className="text-label">Website:</span>
            <span className="text-detail">
              <a href={data.website_url} className="text-blue-900 underline">
                {data.website_url}
              </a>
            </span>
          </div>
        </div>
        <div className="w-1/2 rounded-xl bg-primary shadow-md"></div>
      </div>
    </div>
  )
}

export default BreweryDetail
