import React from 'react';

//third party imports
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

//internal imports
import styles from './styles/DraggableContentStyles';

const DraggableContent = SortableElement((props) => {
  return (
    <div>
      <img className={props.classes.root} src={props.url} alt={props.name} />
      <div className={props.classes.boxContent}>
        <DeleteIcon
          className={props.classes.deleteIcon}
          onClick={props.handleClick}
        />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableContent);
