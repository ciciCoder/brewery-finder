import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function LoaderUI({ className, ...attrs }: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        className,
      )}
      {...attrs}
    >
      <div className="flex gap-1">
        <h1 className="text-7xl text-primary">Loading</h1>
        <Image
          width={100}
          height={100}
          src="/loaders/three-dots.svg"
          alt="dot loader"
        />
      </div>
    </div>
  )
}

export default LoaderUI
