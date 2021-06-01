import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles/LibraryContentStyles';

class LibraryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.changeClickState = this.changeClickState.bind(this);
  }

  changeClickState = () => {
    this.setState({ clicked: true }, () => {
      setTimeout(() => this.setState({ clicked: false }), 3000);
    });
  };
  render() {
    const { classes } = this.props;
    const { clicked } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={classes.content}
        onClick={this.changeClickState}
      >
        <div
          className={`${classes.overlay} ${clicked && classes.showOverlay}`}
        ></div>
        <div
          className={`${classes.overlayMessage} ${
            clicked && classes.showMessage
          }`}
        >
          <h1>{this.props.name}</h1>
          <p>{this.props.desc}</p>
        </div>
        <div>
          <button className={classes.showButton}>{this.props.name}</button>
        </div>
        <span className={classes.seeMore}>More</span>
      </div>
    );
  }
}

export default withStyles(styles)(LibraryContent);
