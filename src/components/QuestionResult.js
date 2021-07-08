import React from 'react';

export default function QuestionResult(props) {
  const { count, isVoted, text } = props;
  const votedStyle = { backgroundColor: '#e8eaf6', borderColor: '#283593' };

  return (
    <div className='card' style={isVoted ? votedStyle : {}}>
      {isVoted && (
        <div className='card-header text-center fw-bold'>Your vote</div>
      )}
      <div className='card-body'>
        <p className='card-title'>{text}</p>
        <div className='progress' style={{ height: '20px' }}>
          <div
            className='progress-bar'
            role='progressbar'
            style={{ width: `${count}%` }}
            aria-valuenow={count}
            aria-valuemin='0'
            aria-valuemax='100'
          >
            {`${count}%`}
          </div>
        </div>
      </div>
    </div>
  );
}
