import React from 'react';
import { withRouter } from 'react-router';

function truncateText(text, limit) {
  if (limit && text.length > limit) return `${text.substr(0, limit - 3)}...`;
  else return text;
}

function QuestionViewPoll(props) {
  const { history, question } = props;
  const { optionOne, optionTwo } = question;

  const handleClick = (e, id) => {
    e.preventDefault();
    history.push(`/questions/${id}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <h5 className='card-title'>Would you rather...</h5>
      <p className='card-text'>
        {truncateText(optionOne.text, 55)}
        <br />
        or
        <br />
        {truncateText(optionTwo.text, 55)}
      </p>
      <div className='d-grid gap-2'>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={(e) => handleClick(e, question.id)}
        >
          View Poll
        </button>
      </div>
    </div>
  );
}

export default withRouter(QuestionViewPoll);
