import React from 'react';

//third party imports
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

// internal imports
import LibraryMetaForm from './LibraryMetaForm';
import styles from './styles/LibraryFormNavStyles';

class LibraryFormNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newLibraryName: '',
      formShowing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  //Saving form data
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  //show form
  showForm = () => {
    this.setState({ formShowing: true });
  };

  //hideForm
  hideForm = () => {
    this.setState({ formShowing: false });
  };

  render() {
    const { classes, open, contents, handleSave } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          {/* toolbar */}
          <Toolbar
            disableGutters={!open}
            // style={{ backgroundColor: '#161a1d' }}
          >
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={clsx(classes.menuButton, { [classes.hide]: open })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Library
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              color='primary'
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <LibraryMetaForm
            contents={contents}
            handleSave={handleSave}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LibraryFormNav);
