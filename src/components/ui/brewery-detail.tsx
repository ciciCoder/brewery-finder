'use client'
import React, { useMemo } from 'react'
import Image from 'next/image'
import { Indie_Flower, Inter, Sigmar_One } from 'next/font/google'
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
import NavLink from './nav-link'
import { pathJoin } from '@/lib/utils'

const sigmaOne = Sigmar_One({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const indieFlower = Indie_Flower({ weight: '400', subsets: ['latin'] })

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
    <div
      className={cx(
        'BreweryDetail flex h-full w-full flex-col justify-center gap-3 overflow-hidden',
        inter.className,
      )}
    >
      <div className="animate__animated animate__fadeInDown relative hidden w-full items-center justify-evenly rounded-lg border border-primary bg-gradient-to-b from-blue-900 from-50% to-tertiary to-50% p-5 shadow-md sm:flex">
        <NavLink
          className={cx(
            'btn-prev w-[150px] text-primary-foreground',
            indieFlower.className,
          )}
          href="/"
        >
          <ArrowLeft size={100} />
        </NavLink>
        <span
          className={cx(
            'line-clamp-1 text-[64px] font-normal uppercase not-italic leading-[normal] text-transparent text-white underline drop-shadow-md',
            sigmaOne.className,
          )}
        >
          (405) Brewing Co
        </span>
        <div>
          <Image
            width={150}
            className="object-cover drop-shadow-md"
            src={pathJoin(process.env.APP_BASE_PATH as string, 'beer.svg')}
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
            label="City"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.city}
            labelIcon={<Building />}
            style={{ animationDelay: '0.2s' }}
          />
          <BreweryField
            label="State/Province"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.state_province}
            labelIcon={<Mountain />}
            style={{ animationDelay: '0.3s' }}
          />
          <BreweryField
            label="Country"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.country}
            labelIcon={<Building2 />}
            style={{ animationDelay: '0.4s' }}
          />
          <BreweryField
            label="Phone"
            className="animate__animated animate__fadeInLeft"
            fieldValue={data.phone}
            labelIcon={<Phone />}
            style={{ animationDelay: '0.5s' }}
          />
          <BreweryField
            label="Website"
            className="animate__animated animate__fadeInLeft"
            labelIcon={<Globe />}
            style={{ animationDelay: '0.6s' }}
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
