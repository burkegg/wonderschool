import Item from './Item';
import React from 'react';

export default function List(props) {
  const { miniList } = props;
  console.log(props);
  return (
    miniList.map(single => (
      <Item 
        single={single}
        key={single.id}
      />
    ))
  )
};