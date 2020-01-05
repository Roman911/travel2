import React from 'react';
import {css} from "aphrodite/no-important";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudsmith} from "@fortawesome/free-brands-svg-icons";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

import {Date} from "../";
import baseStyles from "../../styles";
import styles from "./userNameStyles";

import img from "../../assets/file.jpg";
import avatar from "../../assets/01.jpg";

interface UserNameProps {
  isArticle: boolean
}

export const UserName:React.FC<UserNameProps> = ({ isArticle }) => {

  const user = {
    isAdmin: false,
    firstName: 'Roman',
    lastName: 'Lysyk'
  };

  return <div className={css(baseStyles.flexSB, baseStyles.block)}>
    <div className={css(baseStyles.flex)}>
      <img className={css(baseStyles.imgAv)} src={avatar} alt=""/>
      <div className={css(!isArticle ? styles.blockName : styles.isArticle)}>
        <div className={css(baseStyles.flex)}>
          {!user.isAdmin ?
            <span className={css(styles.name)}>{ user.firstName + ' ' + user.lastName }</span> :
            <span className={css(baseStyles.flex)}>
              <span className={css(styles.name)}>Admin</span>
              <FontAwesomeIcon className={css(styles.crown)} icon={faCrown}/>
            </span>
          }
        </div>
        { isArticle ? <div className={ css(styles.separator) } /> : '' }
        <Date date='1995-12-25' format='LL'/>
      </div>
    </div>
    <FontAwesomeIcon className={css(baseStyles.icon)} icon={faCloudsmith}/>
  </div>
};