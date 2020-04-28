import React from "react"
import { createPortal } from "react-dom"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"
import { Button } from ".."
import usePortal from "../../hooks/usePortal"
import baseStyles from '../../styles/'
import styles from "./InformWindowStyles"

type MyInformWindowProps = {
  id: string
  children: string
  closedModal: null | boolean
  handleClick: () => void
}

export const InformWindow: React.FC<MyInformWindowProps> = ({ id, children, closedModal, handleClick }) => {
  const target = usePortal(id);
  const cln = closedModal ? css(styles.wrapper, styles.closedModal) : css(styles.wrapper, styles.openModal);

  return createPortal(
    <div className={ cln }>
      <div className={ css(baseStyles.flex) }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faInfo }/>
        <p className={ css(styles.text) }>
          { children }
        </p>
      </div>
      <div className={ css(styles.bottom) } >
        <Button handleClick={ handleClick } nameBtn='Закрити' isSubmitting={ false } />
      </div>
    </div>,
    // @ts-ignore
    target,
  );
};