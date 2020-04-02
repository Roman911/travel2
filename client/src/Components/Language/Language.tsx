import React, {useState} from 'react';
import {css} from 'aphrodite/no-important';
import styles from './languageStyles';

const lang = ['uk', 'en', 'ru'];

export const Language:React.FC = () => {
  const [hover, setHover] = useState(false);
  const hoverOn = () => {
    setHover(prev => !hover)
  };
  const hoverOff = () => {
    setHover( prev => !hover)
  };
  const langPosition = lang.map((items:string, index:number) => {
    return <div key={ index } className={ css(styles.content) }>{ items }</div>
  });
  return <div
    onMouseEnter={hoverOn}
    onMouseLeave={hoverOff}
    className={css(styles.wrapper)}
  >
    <div className={ css(styles.content) }>{ lang[0] }</div>
    <div className={ css(styles.contentHover) }>{ hover && langPosition }</div>
  </div>
};