import { StyleSheet } from 'aphrodite/no-important';

import { colorIcons } from "../../variabels";

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 0,
    top: '100%',
    background: '#ffff',
    border: `1px solid ${ colorIcons }`,
    marginTop: 12,
    width: 180,
    borderRadius: 4
  },
  triangle: {
    width: 0,
    height: 0,
    right: 29,
    top: -7,
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
    borderBottom: `7px solid ${ colorIcons }`,
    position: 'absolute',
    ':after': {
      content: '""',
      position: 'absolute',
      left: -6,
      top: -5,
      border: '6px solid transparent',
      borderBottom: '6px solid #ffff',
    },
  },
  ul: {
    display: 'flex',
    flexDirection: 'column'
  },
  li: {
    padding: '8px 10px',
    cursor: 'pointer',
    transition: '200ms',
    ':hover': {
      background: '#0366d6',
      color: '#ffff'
    }
  }
})