import { StyleSheet } from 'aphrodite/no-important';

import { widthL } from '../../../variabels'

export default StyleSheet.create({
  wrapperL: {
    maxWidth: widthL
  },
  wrapper: {
    padding: '10px 20px',
    margin: 10,
    width: 'calc(100% - 370px)'
  },
  title: {
    margin: '10px 0'
  },
  text: {
    margin: '8px 0',
    textAlign: 'justify'
  },
  subTittle: {
    fontWeight: 600
  },
  img: {
    maxWidth: '100%',
    margin: '10px auto',
    display: 'block'
  }
})