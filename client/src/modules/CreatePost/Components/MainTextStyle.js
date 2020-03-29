import { StyleSheet } from 'aphrodite/no-important';

import { colorText, colorBorderInput, colorBtn } from "../../../variabels";

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    border: `1px solid ${colorBorderInput}`,
    margin: '6px 0'
  },
  header: {
    borderBottom: `1px solid ${colorBorderInput}`,
    padding: '2px 15px'
  },
  font: {
    padding: '2px 0',
    margin: 1,
    width: 24,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 4,
    transition: '0.5s',
    font: 'initial',
    fontWeight: '900',
    ':hover': {
      background: colorBtn,
      color: '#fff'
    }
  },
  italic: {
    fontStyle: 'italic'
  },
  icon: {
    width: 'auto !important',
    height: '22px',
    padding: '2px 4px'
  },
  textarea: {
    width: '100%'
  }
})