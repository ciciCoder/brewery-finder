import React from 'react'
import LoaderUI from '../ui/loader-ui'

function LoadingLayout() {
  return (
    <div className="h-[calc(100vh-160px-40px)] overflow-hidden">
      <LoaderUI />
    </div>
  )
}

export default LoadingLayout
