import React from "react"
import { css } from "aphrodite"
import { SectionTitle } from ".."
import { GoogleMaps } from "../../Containers"
import baseStyles from '../../styles'

type MyMapsProps = {
  locations: {
    coordinates: string[]
    isType: string
    small_text: string
    title: string
  }[]
}

export const Maps: React.FC<MyMapsProps> = ({ locations }) => {
  const mapContainerStyle = { height: "calc(100vh - 200px)", width: "100%" };
  const center = { lat: 49.026151, lng: 31.483070 };
  const zoom = 6;

  return <section className={ css(baseStyles.wrapper) }>
    <SectionTitle title='Карта' />
    <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } locations={ locations } />
  </section>
};