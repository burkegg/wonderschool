import React from 'react';
import styled from 'styled-components';

const StyledLocked = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: grey;
  height: 50;
  width: 200;
`;

const StyledUnlocked = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
  height: 50;
  width: 200;
`;

export default function Item(props) {
  const { single, handleTaskClick, taskIsUnlocked } = props;
  const id = single.id;

  if (!taskIsUnlocked(single.id)){
    console.log('locked');
    return (
    <StyledLocked
    id={id}
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <img src='./icons/locked.svg' alt='locked icon' />
      {single.task}__{id}
    </StyledLocked>
  )
  }

  if (single.completedAt !== null){
    return (
    <StyledUnlocked
    id={id} 
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <img src='./icons/completed.svg' alt='completed icon' />
      {single.task}__{id}
    </StyledUnlocked>
  )
  } else {
    return (
    <StyledUnlocked
    id={id} 
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <img src='./icons/incomplete.svg' alt='completed icon' />
      {single.task}__{id}
    </StyledUnlocked>
  )
  } 
  
}