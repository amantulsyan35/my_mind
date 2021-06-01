import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniLibraryStyles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniLibrary extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // deleting a library
  deleteLibrary = (evt) => {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  };

  render() {
    const { classes, libraryName, emoji } = this.props;
    const minImages = this.props.contents.map((img) => {
      return (
        <img
          className={classes.miniImage}
          key={img.name}
          src={img.imageUrl}
          alt={img.libraryName}
        ></img>
      );
    });
    return (
      <div
        className={classes.root}
        onClick={() => this.props.handleClick(this.props.id)}
      >
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: 'all 0.3s ease-in-out' }}
            onClick={this.deleteLibrary}
          />
        </div>
        <div className={classes.images}>{minImages}</div>
        <h5 className={classes.title}>
          {libraryName} <span>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniLibrary);
