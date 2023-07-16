'use client'

import LoaderUI from '@/components/ui/loader-ui'

export default function HomeLoadingPage() {
  return (
    <div className="h-[calc(100vh-160px-40px)] overflow-hidden">
      <LoaderUI />
    </div>
  )
}
