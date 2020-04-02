import React from "react";
import { css } from 'aphrodite/no-important';
import styles from './SectionTitleStyles';

type MySectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<MySectionTitleProps> = ({ title }) => {
  return <div className={css(styles.fontStyle)}>
    { title }
  </div>
};