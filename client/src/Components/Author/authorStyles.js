import { StyleSheet } from 'aphrodite/no-important';

import { colorIcons } from "../../variabels/";

export default StyleSheet.create({
  name: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: '600'
  },
  blockName: {
    marginLeft: 10
  },
  isArticle: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center'
  },
  crown: {
    height: 13,
    width: 'auto !important',
    color: '#af5f0c',
    margin: '0 6px 10px'
  },
  separator: {
    width: 2,
    height: 2,
    borderRadius: '50%',
    margin: '0 10px',
    background: colorIcons
  }
})