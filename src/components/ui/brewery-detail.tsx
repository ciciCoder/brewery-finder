'use client'
import Link from 'next/link'
import React from 'react'
import './brewery-detail.css'
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
} from 'lucide-react'

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
        'BreweryDetail flex h-full w-full flex-col justify-center gap-3',
        inter.className,
      )}
    >
      <div className="relative flex w-full items-center justify-evenly rounded-lg border border-primary bg-gradient-to-r from-primary-dark from-50% to-primary-dark-foreground to-50% p-5 shadow-md">
        <Link
          className={cx(
            'btn-prev w-[150px] text-primary-foreground',
            indieFlower.className,
          )}
          href="/"
        >
          <ArrowLeft size={100} />
        </Link>
        <span
          className={cx(
            'title-header line-clamp-1 uppercase',
            sigmaOne.className,
          )}
        >
          (405) Brewing Co
        </span>
        <div>
          <Image
            width={150}
            className="object-cover drop-shadow-md"
            src="/beer.svg"
            height={150}
            alt="beer"
          />
        </div>
      </div>
      <div className="relative flex w-full gap-3">
        <div className="grid w-full grid-cols-2 gap-3">
          <div className="text-field">
            <div className="text-label">
              <Beer />
              <span>Brewery type </span>
            </div>
            <span className="text-detail">{data.brewery_type}</span>
          </div>
          <div className="text-field">
            <div className="text-label">
              <MapPin />
              <span>Street</span>
            </div>
            <span className="text-detail">{data.address_1}</span>
          </div>
          <div className="text-field">
            <span className="text-label">
              <Building />
              <span>City</span>
            </span>
            <span className="text-detail">{data.city}</span>
          </div>
          <div className="text-field">
            <div className="text-label">
              <Mountain />
              <span>State/Province</span>
            </div>
            <span className="text-detail">{data.state_province}</span>
          </div>
          <div className="text-field">
            <div className="text-label">
              <Building2 />
              <span>Country</span>
            </div>
            <span className="text-detail">{data.state_province}</span>
          </div>
          <div className="text-field">
            <div className="text-label">
              <Phone />
              <span>Phone</span>
            </div>
            <span className="text-detail">{data.phone}</span>
          </div>
          <div className="text-field col-span-2">
            <div className="text-label">
              <Globe />
              <span>Website</span>
            </div>
            <span className="text-detail">
              <a href={data.website_url} className="text-blue-900 underline">
                {data.website_url}
              </a>
            </span>
          </div>
        </div>
        <div className="w-1/2 cursor-pointer rounded-lg bg-tertiary shadow-md duration-1000"></div>
      </div>
    </div>
  )
}

export default BreweryDetail
