import React from 'react';

export default (props)=>{
  console.log('card', props);
  const { total, completed, handleGroupSelect, name } = props;
  return(
    
    <div 
      value={name}
      onClick={(e) => handleGroupSelect(e, name)}
    >
      {total} Total tasks, {completed} completed
      </div>
    
  )
}