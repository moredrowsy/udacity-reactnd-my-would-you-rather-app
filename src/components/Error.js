import React from 'react';
import Title from './Title';

export default function Error(props) {
  const { title, text } = props;

  return (
    <>
      <Title>Error{title && ` ${title}`}</Title>
      <div className='text-center'>{text}</div>
    </>
  );
}
