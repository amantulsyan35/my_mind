import React, { Component } from 'react';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import styles from './styles/NewLibraryFormStyles';
import DraggableList from './DraggableList';
import LibraryFormNav from './LibraryFormNav';
import ContentForm from './ContentForm';

const arrayMove = require('array-move');

class NewLibraryForm extends Component {
  static default = {
    maxContent: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      name: '',
      imageUrl: '',
      desc: '',
      contents: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.clearLibrary = this.clearLibrary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  //add new content
  handleSubmit = (newContent) => {
    this.setState({
      contents: [...this.state.contents, newContent],
      name: '',
      imageUrl: '',
      desc: '',
    });
  };

  // saving form data
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  //saving library
  handleSave = (newLibrary) => {
    newLibrary.id = newLibrary.libraryName.toLowerCase().replace(/, /g, '-');
    newLibrary.contents = this.state.contents;
    // console.log(newLibrary);
    this.props.saveLibrary(newLibrary);
    this.props.history.push('/');
  };

  //removing content
  removeContent = (content) => {
    this.setState({
      contents: this.state.contents.filter((c) => c.name !== content),
    });
  };

  // sorting arrays
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ contents }) => ({
      contents: arrayMove(contents, oldIndex, newIndex),
    }));
  };

  //clear library
  clearLibrary = () => {
    this.setState({ contents: [] });
  };

  render() {
    const { classes, maxContent } = this.props;
    const { open } = this.state;
    const libraryFull = this.state.contents.length >= maxContent;

    return (
      //root
      <div className={classes.root}>
        <LibraryFormNav
          open={open}
          contents={this.props.contents}
          handleSave={this.handleSave}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Create your Library
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant='contained'
                color='secondary'
                onClick={this.clearLibrary}
                className={classes.button}
              >
                Clear Library
              </Button>
              <ContentForm
                libraryFull={libraryFull}
                contents={this.state.contents}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </Drawer>

        {/* main */}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableList
            contents={this.state.contents}
            removeContent={this.removeContent}
            distance={2}
            axis='xy'
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewLibraryForm);
