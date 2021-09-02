import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Error from './Error';
import Question from './Question';
import QuestionResult from './QuestionResults';
import QuestionVote from './QuestionVote';

function QuestionPage(props) {
  const { id, hasVoted, questionExists } = props;

  // Check if question exists
  if (!questionExists) return <Error text='Question does not exist'></Error>;

  return (
    <Question id={id}>
      {hasVoted ? <QuestionResult /> : <QuestionVote />}
    </Question>
  );
}

const matchStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;

  let hasVoted = false;
  if (authedUser && users && users[authedUser]) {
    const { answers } = users[authedUser];
    if (answers && id in answers) {
      hasVoted = true;
    }
  }

  return {
    hasVoted,
    id,
    questionExists: questions[id] ? true : false,
  };
};

export default withRouter(connect(matchStateToProps)(QuestionPage));
