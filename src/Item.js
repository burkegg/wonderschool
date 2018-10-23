import React from 'react';
import styled from 'styled-components';

const StyledLocked = styled.div`
  font-size: 1.5em;
  text-align: left;
  color: grey;
  height: 80px;
`;

const StyledUnlocked = styled.div`
  font-size: 1.5em;
  text-align: left;
  color: black;
  height: 80px;
`;

const Completed = styled(StyledUnlocked)`
  text-decoration: line-through;
`;

const Break = styled.hr`
  width: 500px;
  background-color: grey;
  height: 1px;
  border-top: .5px grey
  margin-bottom: 15px;
  margin-top: 0px;
`;

const Checkbox = styled.img`
  padding-right: 20px;
  padding-left: 10px;
`;

const LockImg = styled.img`
  padding-right: 29px;
  padding-left: 10px;
`;


export default function Item(props) {
  const { single, handleTaskClick, taskIsUnlocked } = props;
  const id = single.id;

  if (!taskIsUnlocked(single.id)){
    return (
    <StyledLocked
    id={id}
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <LockImg src='./icons/locked.svg' alt='locked icon' />
      {single.task}
      <Break></Break>
    </StyledLocked>
  )
  }

  if (single.completedAt !== null){
    return (
    <Completed
    id={id} 
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <Checkbox src='./icons/completed.svg' alt='completed icon' />
      {single.task}
      <Break></Break>
    </Completed>
  )
  } else {
    return (
    <StyledUnlocked
    id={id} 
    onClick={(e) => {handleTaskClick(e, id)}}
    >
      <Checkbox src='./icons/incomplete.svg' alt='completed icon' />
      {single.task}
      <Break></Break>
    </StyledUnlocked>
  )
  } 
  
}