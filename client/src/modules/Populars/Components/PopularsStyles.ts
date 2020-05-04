import { StyleSheet } from 'aphrodite/no-important'

import { colorBtn } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    width: 350,
    margin: '10px 5px',
    padding: 10
  },
  link: {
    margin: '15px 0',
    transition: '0.2s',
    ':hover': {
      opacity: 0.8,
      color: colorBtn
    }
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    marginRight: 15
  },
  title: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: '16px'
  }
})