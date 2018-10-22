// import Item from './Item';
import React from 'react';

export default function List(props) {
  const { list } = props;
  return (
    list.map(item => (<div>{item.id}</div>))
    )
};