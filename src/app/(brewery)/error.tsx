'use client' // Error components must be Client Components

import { Sigmar_One } from 'next/font/google'
import './error.css'
import { cx } from 'class-variance-authority'

const sigmaOne = Sigmar_One({ weight: '400', subsets: ['latin'] })

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const tryAgainHandler = () => reset()

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-secondary">
      <div className="mb-14 flex flex-col items-center justify-center">
        <h1 className={cx('error-code', sigmaOne.className)}>500</h1>
        <h2 className="error-message">Something wrong!</h2>
        <button className="btn btn-primary" onClick={tryAgainHandler}>
          Try Again
        </button>
      </div>
    </div>
  )
}
