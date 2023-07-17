import AppLayout from '@/components/layouts/app-layout'
import BreweryIndex from '@/pages/brewery-index'
import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const BreweryShow = React.lazy(() => import('@/pages/brewery-show'))
const BreweryWishlist = React.lazy(
  () => import('@/pages/brewery-wishlist-page'),
)

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<BreweryIndex />} />
      <Route path="/breweries/:breweryId" element={<BreweryShow />} />
      <Route path="/wishlists" element={<BreweryWishlist />} />
    </Route>,
  ),
  {
    basename: process.env.NODE_ENV === 'production' ? '/brewery-finder' : '/',
  },
)
