import React from "react";
import {css} from "aphrodite/no-important";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import baseStyles from "../../../styles";
import styles from "./MainTextStyle";

type MyMainTextProps = {
  handleChange: () => void
  handleBlur: () => void
}

export const MainText:React.FC<MyMainTextProps> = ({ handleChange, handleBlur }) => {
  return <section className={ css(styles.wrapper) }>
    <div className={ css(baseStyles.flex, styles.header) }>
      <h4 className={ css(styles.font) }>B</h4>
      <h4 className={ css(styles.font, styles.italic) }>I</h4>
      <FontAwesomeIcon className={ css(styles.font, styles.icon) } icon={ faImage }/>
    </div>
    <div>
      <textarea id='text' className={ css(styles.textarea) } onChange={handleChange} onBlur={handleBlur} />
    </div>
  </section>
};