import sizes from './sizes';

const styles = {
  root: {
    width: '25%',
    height: '35%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
  },
  [sizes.down('lg')]: {
    width: '25%',
    height: '20%',
  },
  [sizes.down('lg')]: {
    width: '50%',
    height: '10%',
  },
  [sizes.down('sm')]: {
    width: '100%',
    height: '5%',
  },
  boxContent: {
    width: '25%',
    padding: '10px',
    backgroundColor: '#161a1d',
    display: 'flex',
    '& svg': {
      color: 'white',
      transform: 'scale(2.0)',
      width: '.5em',
    },
  },
};

export default styles;
