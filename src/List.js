import Item from './Item';
import React from 'react';

export default function List(props) {
  const { miniList, name, handleGroupSelect, handleTaskClick, taskIsUnlocked, } = props;
  console.log(props);
  return (
    <div>
      <div
        value={name}
        onClick={(e) => handleGroupSelect(e, name)}>
      Show all lists
      </div>

      {miniList.map((single) => (
        <Item
          single={single}
          key={single.id}
          handleTaskClick={handleTaskClick}
          taskIsUnlocked={taskIsUnlocked}
        />
      ))}
    </div>
  )
};