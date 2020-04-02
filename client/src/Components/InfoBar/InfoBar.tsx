import React from 'react';
import { css } from 'aphrodite/no-important';
import { GoogleMaps } from '../../Containers/'
import baseStyles from '../../styles/';
import styles from './InfoBarStyle';

type MyInfoBarProps = { coordinates: string }

export const InfoBar:React.FC<MyInfoBarProps> = ({ coordinates }) => {
  const mapContainerStyle = { height: "200px", width: "100%" };
  const center = { lat: Number(coordinates[0]), lng: Number(coordinates[1]) };
  const zoom = 6;
  const marks: any = [
    {
      id: 1,
      coordinates: coordinates
    }
  ];
  return <section className={ css( baseStyles.boxShadow, styles.wrapper) }>
    <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } marks={ marks } />
  </section>
};