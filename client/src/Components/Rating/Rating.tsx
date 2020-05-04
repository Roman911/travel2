import React from "react"
import { css } from "aphrodite/no-important"
import styles from './RatingStyles'

type RatingProps = {
  rating: number
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return <span className={ css(styles.wrapper) }>
    { rating }
  </span>
}