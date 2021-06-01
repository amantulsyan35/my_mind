import sizes from './sizes';
import bg from './bg.svg';
export default {
  root: {
    backgroundColor: '#161a1d',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#000000',
    //background by svgbackgrounds.com
    backgroundImage: `url(${bg})`,
    // overflow: 'scroll',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: '100',
    letterSpacing: '.5rem',
    color: 'white',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('lg')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '75%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      letterSpacing: '.3em',
    },
  },
  libraries: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repaet(2, 50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repaet(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};
