'use client' // Error components must be Client Components

import { Sigmar_One } from 'next/font/google'
import { cx } from 'class-variance-authority'
import { useRouter } from 'next/navigation'

const sigmaOne = Sigmar_One({ weight: '400', subsets: ['latin'] })

export default function ErrorPage({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()
  const tryAgainHandler = () => window.location.reload()
  return (
    <div className="flex min-h-[inherit] flex-col items-center justify-center rounded-3xl bg-secondary">
      <div className="mb-14 flex flex-col items-center justify-center">
        <h1
          className={cx(
            'text-5xl font-normal not-italic leading-[normal] text-destructive underline',
            sigmaOne.className,
          )}
        >
          Error
        </h1>
        <h2 className="text-center text-2xl font-normal not-italic leading-[204.436%] tracking-[9.24px] text-black">
          Something went wrong!
        </h2>
        <button className="btn btn-primary" onClick={tryAgainHandler}>
          Try Again
        </button>
      </div>
    </div>
  )
}
