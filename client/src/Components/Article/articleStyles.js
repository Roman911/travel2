import { StyleSheet } from 'aphrodite/no-important';

import { widthL } from './../../variabels'

export default StyleSheet.create({
  wrapperL: {
    maxWidth: widthL
  },
  wrapper: {
    boxShadow: '2px 2px 5px 2px gray',
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
    fontWeight: '600'
  }
})