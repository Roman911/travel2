import { StyleSheet } from 'aphrodite/no-important';

import { colorIcons } from "../../variabels";

export default StyleSheet.create({
  wrapper: {
    margin: '10px',
    cursor: 'pointer',
    color: colorIcons,
    fontWeight: 600,
    borderRadius: 6,
    position: 'relative'
  },
  content: {
    padding: '3px 8px',
    transition: '200ms',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.2)'
    },
  },
  contentHover: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: colorIcons,
    borderRadius: 3,
    color: '#fff'
  }
})