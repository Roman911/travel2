import React, {useState} from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { css } from "aphrodite";
import { Loading } from "../../../Components/Loading/Loading";
import { SectionTitle } from "../../../Components";
import baseStyles from '../../../styles/index';
import icon from "../../../assets/castle.jpg";
import mapStyles from "./mapStyles";

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8"
  });
  const [ selectedPark, setSelectedPark ] = useState(null);

  const mapContainerStyle = { height: "calc(100vh - 200px)", width: "100%" };
  const center = { lat: 49.026151, lng: 31.483070 };
  const zoom = 6;

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

  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
      defaultOptions = {{ styles: mapStyles }}
    >
      {marks.map((park) => (
        <Marker
          key={park.id}
          onClick = {() => {setSelectedPark(park)}}
          position={{ lat: park.coordinates[0], lng: park.coordinates[1] }}
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
  };

  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }

  return <section className={ css(baseStyles.wrapper) }>
    <SectionTitle title='Карта' />
    <div>
      { isLoaded ? renderMap() : <Loading /> }
    </div>
  </section>
};

export default GoogleMaps