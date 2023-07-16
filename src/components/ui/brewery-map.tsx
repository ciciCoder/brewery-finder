'use client'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useId, useState } from 'react'
import ThreeDotsAnimated from '../svg/three-dots-animated'

interface BreweryMapProps {
  center: google.maps.LatLngLiteral
}
export default function BreweryMap({ center }: BreweryMapProps) {
  const id = useId()
  const { isLoaded } = useJsApiLoader({
    id: id + 'google-map-script',
    googleMapsApiKey: 'AIzaSyB7oJjdnu_EN9MAoGRKnr6cqM-jd55iZ5Q',
  })

  const onLoadHandler = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    map.setMapTypeId('terrain')
    setTimeout(() => map.setZoom(18), 100)
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      onLoad={onLoadHandler}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <ThreeDotsAnimated width={100} />
  )
}