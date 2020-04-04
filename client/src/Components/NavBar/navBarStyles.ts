import {StyleSheet} from 'aphrodite/no-important';
import basesImg from '../../assets/basesImg.png';

const background = `url(${basesImg}) no-repeat`;

export default StyleSheet.create({
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0
  },
  logo: {
    background: background,
    width: 82,
    height: 96
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  }
})