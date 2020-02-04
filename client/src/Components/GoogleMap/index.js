import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";

import icon from '../../assets/castle.jpg';

import mapStyles from "./mapStyles";
import {SectionTitle} from "..";

const marks = [
  {
    id: 1,
    coordinates: [50.518551, 30.784221]
  },
  {
    id: 2,
    coordinates: [50.515549, 30.789926]
  },
  {
    id: 3,
    coordinates: [50.512793, 30.778473]
  },
  {
    id: 4,
    coordinates: [50.518032, 30.771738]
  },
];

function Map() {
  const [ selectedPark, setSelectedPark ] = useState(null);

  return <GoogleMap
    defaultZoom = {6}
    defaultCenter = {{ lat: 49.026151, lng: 31.483070 }}
    defaultOptions = {{ styles: mapStyles }}
  >
    {marks.map((park) => (
      <Marker
        key={park.id}
        position={{ lat: park.coordinates[0], lng: park.coordinates[1] }}
        onClick = {() => {setSelectedPark(park)}}
        icon = {{
          url: icon,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    ))}
    {selectedPark && (
      <InfoWindow
        position={{ lat: selectedPark.coordinates[0], lng: selectedPark.coordinates[1] }}
        onCloseClick = {() => {
          setSelectedPark(null)
        }}
      >
        <div>info</div>
      </InfoWindow>
    )}
  </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const Maps = () => {
  return <div>
    <SectionTitle title='Карта' />
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <WrappedMap
        googleMapURL = { 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8' }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </div>
};