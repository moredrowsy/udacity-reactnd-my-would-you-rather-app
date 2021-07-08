import React from 'react';

function getPercentage(decimal) {
  return Math.round(decimal * 100);
}

export default function QuestionResult(props) {
  const { count, total, isVoted, text } = props;
  const percentage = getPercentage(count / total);
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
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin='0'
            aria-valuemax='100'
          >
            {`${percentage}%`}
          </div>
        </div>
        <div className='mt-1 small text-center'>
          {count} of {total}
        </div>
      </div>
    </div>
  );
}
