'use client' // Error components must be Client Components

import { Sigmar_One } from 'next/font/google'
import { cx } from 'class-variance-authority'

const sigmaOne = Sigmar_One({ weight: '400', subsets: ['latin'] })

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const tryAgainHandler = () => reset()
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-secondary">
      <div className="mb-14 flex flex-col items-center justify-center">
        <h1
          className={cx(
            'text-[200px] font-normal not-italic leading-[normal] text-black underline',
            sigmaOne.className,
          )}
        ></h1>
        <h2 className="text-2xl font-normal not-italic leading-[204.436%] tracking-[9.24px] text-black">
          Something wrong!
        </h2>
        <button className="btn btn-primary" onClick={tryAgainHandler}>
          Try Again
        </button>
      </div>
    </div>
  )
}
