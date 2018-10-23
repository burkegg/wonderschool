import React from 'react';
import styled from 'styled-components';

const StyledLocked = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: grey;
`;

const StyledUnlocked = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

export default function Item(props) {
  const { single, handleTaskClick, taskIsUnlocked } = props;
  const id = single.id;

  if (taskIsUnlocked(single.id)){
    console.log('unlocked');
    return (
    <StyledUnlocked
    id={id}
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      {single.task}__{id}
    </StyledUnlocked>
  )
  } else {
    console.log('locked');
    return (
    <StyledLocked
    id={id}
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      {single.task}__{id}
    </StyledLocked>
  )
  }

  
}