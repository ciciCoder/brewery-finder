'use client' // Error components must be Client Components

import './error.css'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const tryAgainHandler = () => reset()

  return (
    <div className="flex h-[calc(100vh-80px-40px)] flex-col items-center justify-center bg-secondary">
      <div className="mb-14 flex flex-col items-center justify-center">
        <h1 className="error-code">500</h1>
        <h2 className="error-message">Something wrong!</h2>
        <button className="btn btn-primary" onClick={tryAgainHandler}>
          Try Again
        </button>
      </div>
    </div>
  )
}
