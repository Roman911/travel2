import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  wrapper: {
    width: 450,
    margin: 10,
    boxShadow: '5px 5px 8px 2px #a0a0a0',
    transition: '200ms',
    background: '#fff',
    ':hover': {
      transform: 'scale(1.01, 1.01)',
      boxShadow: '5px 5px 10px 2px #676767'
    }
  },
  content: {
    cursor: 'pointer'
  },
  img: {
    maxWidth: '100%'
  },
  block: {
    padding: '0 15px'
  },
  heart: {
    height: 15,
    width: 'auto !important',
    color: '#e84a43'
  }
})