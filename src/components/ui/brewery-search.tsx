'use client'

import React, { useImperativeHandle, useRef } from 'react'
import { Input } from './input'
import { Button } from './button'
import { Search } from 'lucide-react'
import ThreeDotsAnimated from '../svg/three-dots-animated'

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
          <ThreeDotsAnimated className="fill-primary-foreground" width={24} />
        ) : (
          <Search />
        )}
      </Button>
    </div>
  )
}

BrewerySearch.displayName = 'BrewerySearch'

export default BrewerySearch
