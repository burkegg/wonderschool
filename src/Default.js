import React from 'react';
import DefaultCard from './DefaultCard';
import styled from 'styled-components';

const TopDefault = styled.h2`
  color: black;
  text-align: left;
  padding-left: 10px;
`;

export default (props) => {
  const { countGroupCompleted, countGroupTasks, data, handleGroupSelect } = props;
  let groupNames = [];
  for (let idx = 0; idx < data.length; idx++) {
    if (!groupNames.includes(data[idx].group)) {
      groupNames.push(data[idx].group);
    }
  }
  return(

    <div>
    <TopDefault>Things to do</TopDefault>
    {groupNames.map((name, idx) => {
      let total = countGroupTasks(name);
      let completed = countGroupCompleted(name);
      return (
        <DefaultCard
          name={name}
          total={total}
          completed={completed}
          handleGroupSelect={handleGroupSelect}
          key={idx}
        />
        )
    })}
    </div>

  )
}
