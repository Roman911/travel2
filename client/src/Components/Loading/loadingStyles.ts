import { StyleSheet } from 'aphrodite/no-important';
import {colorIcons} from "../../variabels";

export default StyleSheet.create({
  wrapper: {
    margin: '15px auto',
    textAlign: 'center'
  },
  car: {
    width: 'auto !important',
    height: 25,
    color: colorIcons,
    padding: '0 5px'
  },
  fire: {
    transform: 'rotate(170deg)',
    width: 'auto !important',
    height: 20,
    color: '#af5d3d'
  }
})