import React, { useState } from "react"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Loading } from "../../Components"
import { LocationInformation } from "../../modules"
import { Locations } from "../../types/locations"

type MyGoogleMapsProps = {
  mapContainerStyle: { height: string, width: string }
  center: { lat: number, lng: number }
  zoom: number
  locations: Locations
}

const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ mapContainerStyle, center, zoom, locations }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8"
  });
  const [selectedPark, setSelectedPark] = useState<null | string>(null)
  const [closeWindow, setCloseWindow] = useState<boolean>(false)
  const handleClick = () => {
    setCloseWindow(true)
    setTimeout(() => {
      setSelectedPark(null)
      setCloseWindow(false)
    }, 700)
  }
  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
    >
      { selectedPark && <LocationInformation _id={ selectedPark } handleClick={ handleClick } closeWindow={ closeWindow } /> }
      {locations.map((park, index) => (
        <Marker
          key={ index }
          onClick={() => {
            setSelectedPark(park._id )
          }}
          position={{lat: Number(park.coordinates[0]), lng: Number(park.coordinates[1])}}
          icon={{
            url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
          }}
        />
      ))}
    </GoogleMap>
  };
  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }
  return isLoaded ? renderMap() : <Loading/>
};

export default GoogleMaps