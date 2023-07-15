'use client'

import Image from 'next/image'
import React from 'react'

function BreweryHeader() {
  return (
    <header className="box-border h-[80px] w-full items-center bg-primary">
      <div className="m-auto flex h-full max-w-[1440px] items-center px-[90px]">
        <Image width={123} height={53} src="/brewery.svg" alt="logo" />
      </div>
    </header>
  )
}

export default BreweryHeader
