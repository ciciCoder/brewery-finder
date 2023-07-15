'use client'

import LoaderUI from '@/components/ui/loader-ui'

export default function Loading() {
  return (
    <div className="h-[calc(100vh-80px-40px)] overflow-hidden">
      <LoaderUI />
    </div>
  )
}
