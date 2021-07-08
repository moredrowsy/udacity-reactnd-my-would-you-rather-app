import React from 'react';
import { connect } from 'react-redux';

import { OPTION_ONE, OPTION_TWO } from './NewQuestion';
import QuestionResult from './QuestionResult';

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
    optionOne: count.optionOne,
    optionTwo: count.optionTwo,
    total,
  };
}

function QuestionResults(props) {
  const { authedUser, id, question, users } = props;

  const { optionOne, optionTwo } = question;
  const counts = pollResults(id, users);

  return (
    <>
      <h5 className='card-title text-center'>Result</h5>
      <QuestionResult
        count={counts[OPTION_ONE]}
        total={counts.total}
        text={optionOne.text}
        isVoted={authedUser.answers[id] === OPTION_ONE}
      />
      <div className='mb-3'></div>
      <QuestionResult
        count={counts[OPTION_TWO]}
        total={counts.total}
        text={optionTwo.text}
        isVoted={authedUser.answers[id] === OPTION_TWO}
      />
    </>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(QuestionResults);
