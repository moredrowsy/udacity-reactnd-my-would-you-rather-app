import React from 'react';
import { connect } from 'react-redux';
import QuestionResult from './QuestionResult';

function getPercentage(decimal) {
  return Math.round(decimal * 100);
}

function pollResults(questionId, users) {
  const count = {
    optionOne: 0,
    optionTwo: 0,
  };

  for (const userId in users) {
    if (users[userId]) {
      const { answers } = users[userId];

      if (answers && questionId in answers) {
        count[answers[questionId]]++;
      }
    }
  }
  const total = count.optionOne + count.optionTwo;

  return {
    optionOne: getPercentage(count.optionOne / total),
    optionTwo: getPercentage(count.optionTwo / total),
  };
}

function QuestionResults(props) {
  const { authedUser, id, question, users } = props;

  const { optionOne, optionTwo } = question;
  const counts = pollResults(id, users);

  return (
    <>
      <h5 className='card-title'>Result</h5>
      <QuestionResult
        count={counts['optionOne']}
        text={optionOne.text}
        isVoted={authedUser.answers[id] === 'optionOne'}
      />
      <div className='mb-3'></div>
      <QuestionResult
        count={counts['optionTwo']}
        text={optionTwo.text}
        isVoted={authedUser.answers[id] === 'optionTwo'}
      />
    </>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(QuestionResults);
