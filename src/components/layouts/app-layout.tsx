import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import BreweryHeader from '../core/brewery-header'
import LoadingLayout from './loading-layout'

function AppLayout() {
  return (
    <div className="flex flex-col gap-5 bg-slate-50 font-itim">
      <BreweryHeader />
      <div className="box-border min-h-[calc(100vh-200px)]">
        <div className="m-auto min-h-[inherit] max-w-[1440px] px-2 md:px-[90px]">
          <Suspense fallback={<LoadingLayout />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="h-[80px] w-full bg-primary"></div>
    </div>
  )
}

export default AppLayout
