import { StyleSheet } from 'aphrodite/no-important';

import { colorBtn } from '../../../variabels'

export default StyleSheet.create({
  wrapper: {
    width: 350,
    position: 'absolute',
    zIndex: 2,
    background: '#fff',
    height: '100%'
  },
  block: {
    width: '100%',
    padding: '10px 20px',
    background: colorBtn
  },
  blockImg: {
    lineHeight: 0
  },
  title: {
    color: '#fff'
  },
  blockText: {
    padding: '10px 20px'
  },
  icon: {
    color: '#fff',
    height: '20px',
    width: 'auto !important'
  },
  text: {
    fontSize: '0.9rem',
    textAlign: 'justify',
    lineHeight: '20px'
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  },
  textInfo: {
    fontSize: '1rem',
    display: 'inline',
    marginRight: 6
  }
})