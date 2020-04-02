import React from 'react';
import { css } from 'aphrodite/no-important';
import { News } from "../../modules";
import { SectionTitle } from "../../Components/";
import baseStyles from '../../styles';
import styles from './homeStyles';

export const Home = () => {
  return <section className={css(baseStyles.wrapper)}>
    <SectionTitle title='Новини'/>
    <div className={css(styles.wrapper)}>
      <News />
      <div className={css(styles.content)}>
        about us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore ducimus error, ipsum iste
        laborum necessitatibus odit quisquam? Asperiores harum, illum incidunt minima mollitia natus perferendis quas
        sapiente sequi ullam?
      </div>
    </div>
  </section>
};