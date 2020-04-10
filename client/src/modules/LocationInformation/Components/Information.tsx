import React from "react"
import { Link } from "react-router-dom"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons"
import baseStyle from '../../../styles'
import styles from './InformationStyles'
import { Location } from '../../../types/locations'

type MyInformationProps = {
  location: Location
  handleClick: () => void
  closeWindow: boolean
}

export const Information: React.FC<MyInformationProps> = ({ location, handleClick, closeWindow }) => {
  const { cover, linkToPost, small_text, title } = location

  const viewWindow = closeWindow ? css(styles.wrapper, styles.closedWindow) : css(styles.wrapper)

  return <div className={ viewWindow }>
    <div className={ css(styles.blockImg) }>
      <img src={ cover } alt=""/>
    </div>
    <div className={ css(styles.block, baseStyle.flexSB) }>
      <FontAwesomeIcon onClick={ handleClick } className={ css(styles.icon) } icon={ faArrowLeft }/>
      <p className={ css(styles.title) }>{ title }</p>
      <FontAwesomeIcon className={ css(styles.icon) } icon={ faCloudsmith }/>
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.text) }>{ small_text }</p>
    </div>
    { linkToPost.length !== 0 && <div className={ css(styles.blockText) }>
      <p className={ css(styles.textInfo) }>Більше про { title } можете подивитись тут:</p>
      <Link to={`/post/${ linkToPost }`}>
        <span className={css(styles.link)}>{ title }</span>
      </Link>
    </div> }
  </div>
}