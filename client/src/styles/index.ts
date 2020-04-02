import { StyleSheet } from 'aphrodite/no-important';

import { widthL, heightIconXL, colorIcons, colorShadow } from "../variabels";

export default StyleSheet.create({
  wrapper: {
    maxWidth: widthL,
    margin: '0 auto',
    padding: '10px 20px'
  },
  flexSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexVFS: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  block: {
    paddingBottom: 10
  },
  boxShadow: {
    boxShadow: `3px 0px 20px ${colorShadow}`,
  },
  icon: {
    height: heightIconXL,
    width: 'auto !important',
    color: colorIcons
  },
  views: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center'
  },
  comment: {
    fontSize: 12,
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center'
  },
  iconS: {
    height: 14,
    width: 'auto !important',
    color: colorIcons,
    marginLeft: 6
  },
  imgAv: {
    borderRadius: '50%',
    width: 40,
    height: 40
  },
  bottom: {
    borderTop: '1px solid #cccccc'
  }
})