import React from 'react';

export default function Item(props) {
  const { single } = props;
  return (<div>{single.task}</div>)
}