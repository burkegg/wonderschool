import Item from './Item';
import React from 'react';
import styled from 'styled-components';
  
const ListTopBar = styled.div`
  font-size: 2em;
  text-align: left;
  color: black;
  height: 80px;
`;

const ReturnView = styled.span `
  font-size: 1em;
  padding-left: 50px;
  color: blue;
`;

const ToDoList = styled.div `
  position: absolute;

`;

export default function List(props) {
  const { miniList, name, handleGroupSelect, handleTaskClick, taskIsUnlocked, } = props;
  const headerText = miniList[0].group;
  return (
    <ToDoList>
      <ListTopBar>
        {headerText}
      
          <ReturnView 
            value={name}
            onClick={(e) => handleGroupSelect(e, name)}>
          Show all lists
          </ReturnView>
        </ListTopBar>
        {miniList.map((single) => (
          <Item
            single={single}
            key={single.id}
            handleTaskClick={handleTaskClick}
            taskIsUnlocked={taskIsUnlocked}
          />
        ))}

    </ToDoList>
  )
};