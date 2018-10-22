import React from 'react';

export default (props)=>{
  console.log('card', props);
  const { total, completed, handleGroupSelect } = props;
  return(
    
    <div onClick={handleGroupSelect}>{total} Total tasks, {completed} completed</div>
    
  )
}