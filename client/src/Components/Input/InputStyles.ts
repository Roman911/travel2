import { StyleSheet } from 'aphrodite/no-important';

import { colorText, colorBorderInput, colorTextInput, colorIcons } from "../../variabels";

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: '6px 0',
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
    width: 150,
    fontWeight: 600
  },
  input: {
    border: `1px solid ${colorBorderInput}`,
    padding: '10px 15px',
    color: colorTextInput,
    fontWeight: 600,
    width: 'calc(100% - 160px)',
    ':focus': {
      border: '1px solid black'
    }
  },
  // Radio
  inputRadio: {
    display: 'none'
  },
  labelWrapper: {
    cursor: 'pointer',
    marginRight: 15
  },
  label: {
    margin: '0 6px',
    border: `2px solid ${ colorIcons }`,
    height: 12,
    width: 12,
    borderRadius: 12
  },
  labelActive: {
    background: colorIcons,
    transition: '200ms'
  },
  // Select
  option: {
    margin: '6px 0',
    fontWeight: 600,
    color: colorText
  }
})