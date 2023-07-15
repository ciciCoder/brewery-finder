'use client'

import Image from 'next/image'
import React, { useImperativeHandle, useRef } from 'react'
import { Input } from './input'
import { Button } from './button'

type BrewerySearchProps = Omit<
  JSX.IntrinsicElements['input'],
  'onChange' | 'onClick'
> & {
  onChange?: (val: string) => void
  onClick?: (val: string) => void
  loading?: boolean
  value?: string
}

const BrewerySearch = ({
  onChange,
  onClick,
  loading,
  value,
  ...attrs
}: BrewerySearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
    onChange?.(inputRef?.current?.value ?? '')
  }

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(inputRef?.current?.value ?? '')
  }

  return (
    <div className="flex justify-between rounded-full border border-primary bg-white pl-3 shadow-md">
      <Input
        {...attrs}
        onChange={onChangeHandler}
        className="w-full border-none outline-none"
        type="text"
        placeholder="Search..."
        defaultValue={value}
        ref={inputRef}
      />
      <Button
        className="btn btn-primary rounded-l-none rounded-r-full"
        onClick={onClickHandler}
      >
        {loading ? (
          <Image
            src="/loaders/three-dots-white.svg"
            alt="loader"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/icon/search-white.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        )}
      </Button>
    </div>
  )
}

BrewerySearch.displayName = 'BrewerySearch'

export default BrewerySearch
