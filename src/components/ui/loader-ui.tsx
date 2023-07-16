'use client'

import { cn } from '@/lib/utils'
import React from 'react'

function LoaderUI({ className, ...attrs }: JSX.IntrinsicElements['div']) {
  const loadingLetters = 'Loading...'.split('')
  const getOffset = (index: number) => `${15 - 5 * (index % 3)}px`
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        className,
      )}
      {...attrs}
    >
      <div className="flex gap-1">
        <h1 className="flex text-7xl text-primary">
          {loadingLetters.map((letter, index) => (
            <div
              key={letter}
              className="animate-updown-threepoints"
              style={
                {
                  animationDelay: `0.${index % 3}s`,
                  '--updown-threepoints-offset': getOffset(index),
                  transform: 'translateY(-var(--updown-threepoints-offset))',
                } as React.CSSProperties
              }
            >
              {letter}
            </div>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default LoaderUI
