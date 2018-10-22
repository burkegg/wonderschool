import React from 'react';
import DefaultCard from './DefaultCard';

export default (props) => {
  const { countGroupCompleted, countGroupTasks, data } = props;
  let groupNames = [];
  for (let idx = 0; idx < data.length; idx++) {
    if (!groupNames.includes(data[idx].group)) {
      groupNames.push(data[idx].group);
    }
  }
  console.log(groupNames);
  return(
    groupNames.map((name) => {
      let total = countGroupTasks(name);
      let completed = countGroupCompleted(name);
      return (<DefaultCard total={total} completed={completed} />)
    })
  )
}


