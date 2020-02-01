import { StyleSheet } from 'aphrodite/no-important';

import { colorText, colorBorderInput, colorTextInput } from "../../variabels";

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex'
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  paragraph: {
    color: colorText,
    width: '20%',
    fontWeight: '600'
  },
  input: {
    border: `1px solid ${colorBorderInput}`,
    padding: '10px 15px',
    color: colorTextInput,
    fontWeight: '600',
    width: '100%',
    ':focus': {
      border: '1px solid black'
    }
  }
})