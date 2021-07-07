import React from 'react';

export default function CardTab(props) {
  const { title, currentValue, value, handleChange } = props;

  return (
    <li className='nav-item'>
      <button
        className={`nav-link ${currentValue === value ? 'active' : ''}`}
        value={value}
        onClick={(e) => handleChange(e.target.value)}
      >
        {title}
      </button>
    </li>
  );
}
