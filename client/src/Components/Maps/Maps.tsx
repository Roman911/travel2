import React from "react";
import { css } from "aphrodite";
import { SectionTitle } from "..";
import { GoogleMaps } from "../../Containers";
import baseStyles from '../../styles'

export const Maps: React.FC = () => {
  const mapContainerStyle = { height: "calc(100vh - 200px)", width: "100%" };
  const center = { lat: 49.026151, lng: 31.483070 };
  const zoom = 6;
  const marks: any = [
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

  return <section className={ css(baseStyles.wrapper) }>
    <SectionTitle title='Карта' />
    <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } marks={ marks } />
  </section>
};