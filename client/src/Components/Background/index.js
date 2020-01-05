import React from 'react';

import { css } from 'aphrodite/no-important';
import styles from './styles';

export default function () {
  return <div className={ css(styles.bg) } />
}