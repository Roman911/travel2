import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Loading } from "../../Components";

type MyGoogleMapsProps = {
  mapContainerStyle: { height: string, width: string }
  center: { lat: number, lng: number }
  zoom: number
  marks: [{ id: number; coordinates: number[]; isType: string }]
}
type setPark = {
  id: number
  coordinates: number[]
}

const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ mapContainerStyle, center, zoom, marks }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8"
  });
  const [selectedPark, setSelectedPark] = useState<null | setPark>(null);
  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
    >
      {marks.map((park) => (
        <Marker
          key={park.id}
          onClick={() => {
            setSelectedPark(park)
          }}
          position={{lat: Number(park.coordinates[0]), lng: Number(park.coordinates[1])}}
          icon={{
            url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
          }}
        />
      ))}
      {selectedPark && (
        <InfoWindow
          position={{lat: selectedPark.coordinates[0], lng: selectedPark.coordinates[1]}}
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