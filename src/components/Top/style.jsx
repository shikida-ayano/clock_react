import { StyleSheet } from 'aphrodite';
import _ from 'lodash';

export default StyleSheet.create({
  module: {
    backgroundColor: '#fff',
    padding: '50px',
  },
  status: {
    margin: 0,
    padding: '0',
    fontSize: '40px',
    color: '#333',
  },
  now: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonWrap: {
    display: 'block',
    width: '400px',
    margin: '0 auto',
  },
  button: {
    display: 'block',
    width: '100%',
    background: '#3581fb',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '20px',
    padding: '3px 0',
  },
  text: {
    fontSize: '14px',
    color: '#333',
    display: 'inline-block',
    marginRight: '10px',
  },
  link: {
    fontSize: '16px',
  }
});
