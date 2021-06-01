import React from 'react';

// third party
import { SortableContainer } from 'react-sortable-hoc';

//internal
import DraggableContent from './DraggableContent';

const DraggableList = SortableContainer((props) => {
  return (
    <div>
      {props.contents.map((content, i) => {
        return (
          <DraggableContent
            index={i}
            key={content.name}
            url={content.imageUrl}
            name={content.name}
            desc={content.desc}
            handleClick={() => props.removeContent(content.name)}
          />
        );
      })}
    </div>
  );
});

export default DraggableList;
