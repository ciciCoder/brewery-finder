'use client'
import React, { useMemo } from 'react'
import { cx } from 'class-variance-authority'
import {
  Beer,
  Building,
  Building2,
  MapPin,
  Mountain,
  Phone,
  Globe,
  ArrowLeft,
  Factory,
} from 'lucide-react'
import BreweryField from './brewery-field'
import 'animate.css'
import BreweryMap from './brewery-map'
import { NavLink } from 'react-router-dom'
import { Brewery } from '@/api/brewery.api'

function BreweryDetail({ data }: { data: Brewery }) {
  return (
    <div
      className={cx(
        'BreweryDetail flex h-full w-full flex-col justify-center gap-3 overflow-hidden',
      )}
    >
      <div className="animate__animated animate__fadeInDown relative hidden w-full items-center justify-evenly rounded-lg border border-primary bg-gradient-to-b from-blue-900 from-50% to-tertiary to-50% p-5 shadow-md sm:flex">
        <NavLink
          className="btn-prev w-[150px] font-indie_flower text-primary-foreground"
          to="/"
        >
          <ArrowLeft size={100} />
        </NavLink>
        <span className="line-clamp-1 font-sigma_one text-[64px] font-normal uppercase not-italic leading-[normal] text-transparent text-white underline drop-shadow-md">
          (405) Brewing Co
        </span>
        <div>
          <img
            width={150}
            className="object-cover drop-shadow-md"
            src="/beer.svg"
            height={150}
            alt="beer"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col-reverse gap-3 sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          <BreweryField
            label="Company Name"
            className="animate__animated animate__fadeInLeft sm:hidden"
            fieldValue={data.name}
            labelIcon={<Factory />}
            style={{ animationDelay: '0.1s' }}
          />
          <BreweryField
            label="Brewery Type"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.brewery_type}
            labelIcon={<Beer />}
            style={{ animationDelay: '0.1s' }}
          />
          <BreweryField
            label="Street"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.address_1}
            labelIcon={<MapPin />}
            style={{ animationDelay: '0.2s' }}
          />
          <BreweryField
            label="City"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.city}
            labelIcon={<Building />}
            style={{ animationDelay: '0.3s' }}
          />
          <BreweryField
            label="State/Province"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.state_province}
            labelIcon={<Mountain />}
            style={{ animationDelay: '0.4s' }}
          />
          <BreweryField
            label="Country"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.country}
            labelIcon={<Building2 />}
            style={{ animationDelay: '0.5s' }}
          />
          <BreweryField
            label="Phone"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.phone}
            labelIcon={<Phone />}
            style={{ animationDelay: '0.6s' }}
          />
          <BreweryField
            label="Website"
            className="animate__animated animate__fadeInLeft col-span-2"
            labelIcon={<Globe />}
            style={{ animationDelay: '0.7s' }}
            fieldValue={
              <a href={data.website_url} className="text-blue-900 underline">
                {data.website_url}
              </a>
            }
          />
        </div>
        <div className="animate__animated sm:animate__fadeInBottomRight flex h-[200px] w-full cursor-pointer items-center justify-center rounded-lg bg-tertiary shadow-md duration-1000 sm:h-auto sm:w-1/2">
          <BreweryMap
            center={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
          />
        </div>
      </div>
    </div>
  )
}

export default BreweryDetail
