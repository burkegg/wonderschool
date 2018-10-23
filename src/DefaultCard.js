import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  font-size: 1.5em;
  text-align: left;
  color: black;
  height: 80px;
`;
const Description = styled.div`
  font-size: .7em;
  color: grey;
  text-align: left;
  margin-left: 35px;
`;

const DefaultSVG = styled.img`
  padding-left: 10px;
  padding-right: 20px;

`;

export default (props)=>{
  const { total, completed, handleGroupSelect, name } = props;
  return(
    
    <Card 
      value={name}
      onClick={(e) => handleGroupSelect(e, name)}
    >
      <DefaultSVG src="./icons/group.svg" alt="group icon" />
      {name}
      <Description>
        {completed} of {total} complete
      </Description>
      </Card>
    
  )
}