import React from 'react';
import { css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
import styles from './loadingStyles';

export const Loading:React.FC = () => {
  return <div className={ css(styles.wrapper) }>
    <FontAwesomeIcon className={ css(styles.fire) } icon={ faPhoenixFramework }/>
    <FontAwesomeIcon className={ css(styles.car) } icon={ faCarSide }/>
  </div>
};