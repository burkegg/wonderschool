import React from 'react';
import DefaultCard from './DefaultCard';

export default (props) => {
  const { countGroupCompleted, countGroupTasks, data, handleGroupSelect } = props;
  let groupNames = [];
  for (let idx = 0; idx < data.length; idx++) {
    if (!groupNames.includes(data[idx].group)) {
      groupNames.push(data[idx].group);
    }
  }
  return(
    groupNames.map((name, idx) => {
      let total = countGroupTasks(name);
      let completed = countGroupCompleted(name);
      return (
        <DefaultCard
          name={name}
          total={total}
          completed={completed}
          handleGroupSelect={handleGroupSelect}
          key={idx}
        />)
    })
  )
}
