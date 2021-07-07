import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Question from './Question';
import QuestionResult from './QuestionResults';
import QuestionAsk from './QuestionAsk';

function QuestionPage(props) {
  const { id, hasVoted } = props;

  if (hasVoted) {
    return (
      <Question id={id}>
        <QuestionResult />
      </Question>
    );
  } else {
    return (
      <Question id={id}>
        <QuestionAsk />
      </Question>
    );
  }
}

const matchStateToProps = ({ authedUser, users }, props) => {
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
  };
};

export default withRouter(connect(matchStateToProps)(QuestionPage));
