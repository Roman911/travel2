import React from "react"
import {Link} from "react-router-dom"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons"
import baseStyle from '../../../styles'
import styles from './InformationStyles'

export const Information = () => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.blockImg) }>
      <img src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/locationInformation/pz_350.jpg" alt=""/>
    </div>
    <div className={ css(styles.block, baseStyle.flexSB) }>
      <FontAwesomeIcon className={ css(styles.icon) } icon={ faArrowLeft }/>
      <p className={ css(styles.title) }>Підгорецький замок</p>
      <FontAwesomeIcon className={ css(styles.icon) } icon={ faCloudsmith }/>
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.text) }>Підгорецький замок - історико-архітектурний шедевр ХVІІ століття, один із найкрасивіших замків України в стилі ренесанс, який за вишуканістю не поступається французькому Версалю. Розташований він у селі Підгірці Львівської області. Разом з Олеським і Золочівським замками Підгорецький замок включений у популярний туристичний маршрут, так звану «Золоту підкову Львівщини».</p>
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.textInfo) }>Більше про Підгорецький замок можете подивитись тут:</p>
      <Link to="/register">
        <span className={css(styles.link)}>Підгорецький замок</span>
      </Link>
    </div>
  </div>
}