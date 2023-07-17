'use client'

import { Beer, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/nav-link'
import { pathJoin } from '@/lib/utils'

function BreweryHeader() {
  return (
    <header className="box-border h-[80px] w-full items-center bg-primary">
      <div className="m-auto flex h-full max-w-[1440px] flex-col justify-center px-2 sm:flex-row sm:items-center sm:justify-between sm:px-[90px]">
        <NavLink href="/">
          <Image
            width={123}
            height={53}
            src={pathJoin(process.env.APP_BASE_PATH as string, 'brewery.svg')}
            alt="logo"
          />
        </NavLink>
        <nav className="flex gap-3 text-primary-foreground">
          <NavLink
            href="/"
            className="line flex gap-1 duration-500 hover:text-tertiary"
            activeClass="line-through"
          >
            <Beer />
            <span>Breweries</span>
          </NavLink>
          <NavLink
            href="/wishlists"
            className="flex gap-1 duration-500 hover:text-tertiary"
            activeClass="line-through"
          >
            <Star />
            <span>Wishlists</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default BreweryHeader
