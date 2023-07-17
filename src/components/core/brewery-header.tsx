'use client'

import { Beer, Star } from 'lucide-react'
import React from 'react'
import path from 'path'
import { cx } from 'class-variance-authority'
import { NavLink } from 'react-router-dom'

function BreweryHeader() {
  return (
    <header className="box-border h-[80px] w-full items-center bg-primary">
      <div className="m-auto flex h-full max-w-[1440px] flex-col justify-center px-2 sm:flex-row sm:items-center sm:justify-between sm:px-[90px]">
        <NavLink to="/">
          <img width={123} height={53} src="/brewery.svg" alt="logo" />
        </NavLink>
        <nav className="flex gap-3 text-primary-foreground">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              cx(
                'line flex gap-1 duration-500 hover:text-tertiary',
                isActive && 'line-through',
              )
            }
          >
            <Beer />
            <span>Breweries</span>
          </NavLink>
          <NavLink
            to="/wishlists"
            className={({ isActive }: { isActive: boolean }) =>
              cx(
                'line flex gap-1 duration-500 hover:text-tertiary',
                isActive && 'line-through',
              )
            }
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
