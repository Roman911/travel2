import React from 'react';
import { css } from 'aphrodite/no-important';

import { News } from "../../modules";

import Background from '../../Components/Background/index';
import baseStyles from '../../styles/index';
import styles from './homeStyles';

export const Home = () => {
  return <section>
    <Background />
    <div className={ css(baseStyles.wrapper, styles.wrapper) }>
      <News />
      <div className={ css(styles.content) }>
        about us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore ducimus error, ipsum iste laborum necessitatibus odit quisquam? Asperiores harum, illum incidunt minima mollitia natus perferendis quas sapiente sequi ullam?
      </div>
    </div>
  </section>
};