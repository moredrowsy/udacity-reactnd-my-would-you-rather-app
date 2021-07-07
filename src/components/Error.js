import React from 'react';

export default function Error(props) {
  const { title, text } = props;

  return (
    <>
      <h2 class='text-center'>Error{title && ` ${title}`}</h2>
      <div class='text-center'>{text}</div>
    </>
  );
}
