import React from 'react';

//third party imports
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

// internal imports
import MiniLibrary from './MiniLibrary';
import styles from './styles/LibraryListStyles';

class LibraryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deleteId: '',
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openDialog = (id) => {
    this.setState({ openDeleteDialog: true, deleteId: id });
  };

  closeDialog = () => {
    this.setState({ openDeleteDialog: false, deleteId: '' });
  };

  goToLibrary = (id) => {
    this.props.history.push(`/library/${id}`);
  };

  handleDelete = () => {
    this.props.deleteLibrary(this.state.deleteId);
    this.closeDialog();
  };

  render() {
    const { libraries, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}> MY MIND</h1>
            <Link to='/library/new'>NEW LIBRARY</Link>
          </nav>
          {libraries && libraries.length === 0 && (
            <h1 className={classes.heading}>
              Start Creating the Library Of Your Mind!
            </h1>
          )}
          <div className={classes.libraries}>
            {libraries?.map((library) => {
              return (
                <MiniLibrary
                  {...library}
                  handleClick={this.goToLibrary}
                  key={library.id}
                  id={library.id}
                  openDialog={this.openDialog}
                />
              );
            })}
          </div>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete This Library
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(LibraryList);
