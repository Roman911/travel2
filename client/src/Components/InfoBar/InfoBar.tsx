import React from 'react'
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { GoogleMaps } from '../../Containers/'
import baseStyles from '../../styles/'
import styles from './InfoBarStyle'

type MyInfoBarProps = {
  coordinates: string
  tickets: string[]
  location: string
  work_time: string
  isType: string
}

export const InfoBar:React.FC<MyInfoBarProps> = ({ coordinates, tickets, location, work_time, isType }) => {
  const mapContainerStyle = { height: "200px", width: "100%" };
  const center = { lat: Number(coordinates[0]), lng: Number(coordinates[1]) };
  const zoom = 11;
  const locations: any = [
    {
      id: 1,
      coordinates: coordinates,
      isType: isType
    }
  ];

  const viewTickets = tickets.length !== 0 && <div className={ css(styles.content) }>
    <div className={ css(baseStyles.flex, styles.block) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faTicketAlt } />
      <p className={ css(styles.title) }>Вхідний Квиток</p>
    </div>
    {tickets.map((item, index) => {
      return <p key={ index } className={ css(styles.text, styles.tickets) }>{ item }</p>
    })}
  </div>;
  
  return <section className={ css( baseStyles.boxShadow, styles.wrapper) }>
    <GoogleMaps mapContainerStyle={ mapContainerStyle } center={ center } zoom={ zoom } locations={ locations } />
    <div className={ css(styles.content) }>
      <div className={ css(baseStyles.flex, styles.block) }>
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faMapMarkerAlt } />
        <p className={ css(styles.title) }>Місце знаходження:</p>
      </div>
      <p className={ css(styles.text) }>{ location }</p>
    </div>
    { viewTickets }
    <div className={ css(styles.content) }>
      <div className={ css(baseStyles.flex, styles.block) }>
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faClock } />
        <p className={ css(styles.title) }>Час роботи:</p>
      </div>
      <p className={ css(styles.text) }>{ work_time }</p>
    </div>
  </section>
};