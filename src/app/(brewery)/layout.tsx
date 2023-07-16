'use client'

import BreweryHeader from '@/components/core/brewery-header'
import LoaderUI from '@/components/ui/loader-ui'
import store from '@/redux/store'
import { Provider } from 'react-redux'

export default function BreweryLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <div className="flex flex-col gap-5 bg-slate-50">
        <BreweryHeader />
        <div className="box-border min-h-[calc(100vh-200px)]">
          <div className="m-auto min-h-[inherit] max-w-[1440px] px-2 md:px-[90px]">
            {children}
          </div>
        </div>
        <div className="h-[80px] w-full bg-primary"></div>
      </div>
    </Provider>
  )
}
