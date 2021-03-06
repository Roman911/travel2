import React from "react"
import { Link } from "react-router-dom"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

import baseStyles from '../../../styles'
import styles from './ProfileStyles'
import { Avatar, Button, Rating } from "../../../Components"

import { UserData } from '../../../types/user'
import { ToVisit } from "./ToVisit"
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
type ProfileMainProps = {
  data: UserData
  handleClick: (arg: string) => void
  nameSection: string
  locationsUserList: [{
    _id: string
    locationId: string
    userId: string
  }]
}

export const ProfileMain: React.FC<ProfileMainProps> = ({ data, handleClick, nameSection, locationsUserList }) => {
  const { name, avatar } = data
  const linkSS = ( link: string, iconStyle: any, icon: IconDefinition ) => {
    return <Link to={ link }>
      <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, iconStyle) } icon={ icon } />
    </Link>
  }
  return <section className={css(baseStyles.wrapper, styles.wrapper)}>
    <div className={ css(styles.header, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flex) }>
        <Avatar avatar={ avatar } name={ name } size='XL' />
        <div className={ css(styles.content) }>
          <p className={ css(styles.name) }>{ name }</p>
          <Rating rating={ 99 } />
          <p className={ css(styles.text) }>Люблю подоружувати</p>
        </div>
      </div>
      <div className={ css(styles.right) }>
        <Link to='/setting' >
          <Button nameBtn='налаштування' isSubmitting={ false } />
        </Link>
        <div className={ css(styles.links) }>
          { linkSS( '/', styles.iconF, faFacebookF ) }
          { linkSS( '/', styles.iconI, faInstagram ) }
          { linkSS( '/', styles.iconT, faTwitter ) }
          { linkSS( '/', styles.iconY, faYoutube ) }
        </div>
      </div>
    </div>
    <div>
      <div className={ css(styles.wrapperTabs, baseStyles.flex) }>
        <button onClick={ () => handleClick('wantToVisit') } className={ css(styles.link, nameSection === 'wantToVisit' && styles.linkActive) }>Хочу відвідати</button>
        <button onClick={ () => handleClick('visited') } className={ css(styles.link, nameSection === 'visited' && styles.linkActive) }>Відвідав</button>
        <button className={ css(styles.link) }>Мої статті</button>
        <button className={ css(styles.link) }>Чорновики</button>
      </div>
      <ToVisit locationsUserList={ locationsUserList } nameSection={ nameSection } handleClick={ handleClick } />
    </div>
  </section>
}