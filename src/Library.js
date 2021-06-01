import React from 'react';

//third party
import { withStyles } from '@material-ui/core/styles';

// internal
import styles from './styles/LibraryStyles';
import LibraryContent from './LibraryContent';
import Navbar from './Navbar';
import LibraryFooter from './LibraryFooter';

class Library extends React.Component {
  render() {
    const { libraryName, emoji, contents } = this.props.library;
    const { classes } = this.props;
    console.log(contents);
    const contentBoxes = contents.map((content, idx) => {
      return (
        <LibraryContent
          name={content.name}
          image={content.imageUrl}
          desc={content.desc}
          link={content.link}
          key={idx}
        />
      );
    });
    return (
      <div className={classes.Library}>
        <Navbar />
        <div className={classes.libraryContent}>{contentBoxes}</div>
        <LibraryFooter libraryName={libraryName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Library);
