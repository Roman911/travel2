import React from "react"
import { css } from "aphrodite/no-important"
import { Link } from "react-router-dom"

import baseStyles from '../../../styles'
import styles from './PopularsStyles'

export const PopularsBlock: React.FC = () => {
  return <section className={ css(styles.wrapper, baseStyles.boxShadow) }>
    <h4>ПОПУЛЯРНІ</h4>
    <Link className={ css(baseStyles.flex, styles.link) } to='/' >
      <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
      <span className={ css(styles.title) }>Підгорецький замок</span>
    </Link>
    <Link className={ css(baseStyles.flex, styles.link) } to='/' >
      <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/oz_450.jpg" alt=""/>
      <span className={ css(styles.title) }>Олеський замок</span>
    </Link>
    <Link className={ css(baseStyles.flex, styles.link) } to='/' >
      <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/hf_450.jpg" alt=""/>
      <span className={ css(styles.title) }>Хотинська фортеця</span>
    </Link>
    <Link className={ css(baseStyles.flex, styles.link) } to='/' >
      <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
      <span className={ css(styles.title) }>Підгорецький замок</span>
    </Link>
    <Link className={ css(baseStyles.flex, styles.link) } to='/' >
      <img className={ css(styles.img) } src="http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg" alt=""/>
      <span className={ css(styles.title) }>Підгорецький замок</span>
    </Link>
  </section>
}