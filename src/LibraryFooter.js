import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/LibraryFooterStyles';

function LibraryFooter(props) {
  const { libraryName, emoji, classes } = props;
  return (
    <footer className={classes.LibraryFooter}>
      {libraryName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(LibraryFooter);
