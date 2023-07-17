import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import ThreeDotsAnimated from '../svg/three-dots-animated'

interface BreweryMapProps {
  center: google.maps.LatLngLiteral
}
export default function BreweryMap({ center }: BreweryMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
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
