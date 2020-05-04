import React from 'react'
import { css } from 'aphrodite/no-important'
import {News, Populars} from "../../modules"
import { SectionTitle } from ".."
import baseStyles from '../../styles'
import styles from './homeStyles'

export const Home: React.FC = () => {
  return <section className={css(baseStyles.wrapper)}>
    <SectionTitle title='Новини'/>
    <div className={css(styles.wrapper)}>
      <News />
      <Populars />
    </div>
  </section>
};