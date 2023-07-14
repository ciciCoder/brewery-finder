'use client'

import Image from 'next/image'
import React from 'react'
import { Input } from './input'

type BrewerySearchProps = Omit<JSX.IntrinsicElements['input'], 'onChange'> & {
  onChange?: (val: string) => void
}

const BrewerySearch = React.forwardRef<HTMLInputElement, BrewerySearchProps>(
  ({ onChange, ...attrs }, ref) => {
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange?.(e.target.value)
    }

    return (
      <div className="flex justify-between rounded-full border border-primary px-3 shadow-md">
        <Input
          {...attrs}
          onChange={onChangeHandler}
          className="w-full border-none outline-none"
          type="text"
          placeholder="Search..."
          ref={ref}
        />
        <Image
          src="/icon/search.svg"
          alt="search-icon"
          width={24}
          height={24}
        />
      </div>
    )
  },
)

BrewerySearch.displayName = 'BrewerySearch'

export default BrewerySearch
