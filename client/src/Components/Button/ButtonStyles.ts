import { StyleSheet } from 'aphrodite/no-important';

import { colorBtn } from '../../variabels/';

export default StyleSheet.create({
  btn: {
    boxShadow: `0 5px 12px rgba(0,0,0,.1)`,
    padding: '8px 16px',
    background: colorBtn,
    color: '#fff',
    transition: '200ms',
    ':hover': {
      boxShadow: `0 5px 16px rgba(0,0,0,.16)`,
    }
  }
})