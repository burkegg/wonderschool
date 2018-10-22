import React from 'react';

export default (props)=>{
  console.log('card', props);
  return(
    
    <div>{props.total} Total tasks, {props.completed} completed</div>
    
  )
}