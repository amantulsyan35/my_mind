import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>
            <span>🧠</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
