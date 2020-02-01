import React from "react";
import {css} from 'aphrodite/no-important';

import styles from './SectionTitleStyles';

export const SectionTitle = ({ title }) => {
  return <div className={css(styles.fontStyle)}>
    { title }
  </div>
};