import { StyleSheet } from 'aphrodite/no-important'

import { colorBtn } from '../../../variabels'

export default StyleSheet.create({
  text: {
    fontSize: 14,
    paddingLeft: 3
  },
  icon: {
    height: 18,
    paddingBottom: 4
  },
  iconActive: {
    color: colorBtn
  },
  iconPost: {
    cursor: 'pointer'
  }
})