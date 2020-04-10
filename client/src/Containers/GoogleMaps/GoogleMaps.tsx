import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Loading } from "../../Components";
import { LocationInformation } from "../../modules";

type MyGoogleMapsProps = {
  mapContainerStyle: { height: string, width: string }
  center: { lat: number, lng: number }
  zoom: number
  locations: {
    coordinates: string[]
    isType: string
    small_text: string
    title: string
  }[]
}
type setPark = {
  id: number
  coordinates: string[]
}

const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ mapContainerStyle, center, zoom, locations }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8"
  });
  const [selectedPark, setSelectedPark] = useState<null | setPark>(null);
  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
    >
      <LocationInformation />
      {locations.map((park, index) => (
        <Marker
          key={ index }
          onClick={() => {
            setSelectedPark({ id: index, coordinates: park.coordinates })
          }}
          position={{lat: Number(park.coordinates[0]), lng: Number(park.coordinates[1])}}
          icon={{
            url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
          }}
        />
      ))}
      {selectedPark && (
        <InfoWindow
          position={{lat: Number(selectedPark.coordinates[0]), lng: Number(selectedPark.coordinates[1])}}
          onCloseClick={() => {
            setSelectedPark(null)
          }}
        >
          <div>info</div>
        </InfoWindow>
      )}
    </GoogleMap>
  };
  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }
  return isLoaded ? renderMap() : <Loading/>
};

export default GoogleMaps