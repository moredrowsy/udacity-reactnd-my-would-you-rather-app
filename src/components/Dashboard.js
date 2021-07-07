import React from 'react';
import { connect } from 'react-redux';

import { setShowQuestionType } from '../store/actions/showQuestionType.action';
import Question from './Question';
import QuestionViewPoll from './QuestionViewPoll';

function Dashboard(props) {
  const ANSWERED = 'ANSWERED';
  const UNANSWERED = 'UNANSWERED';
  const { answered, unanswered, dispatch, showQuestionType } = props;
  const showQuestions = showQuestionType === ANSWERED ? answered : unanswered;

  const handleChange = (answerType) =>
    dispatch(setShowQuestionType(answerType));

  return (
    <div className='card'>
      <div className='card-header'>
        <ul className='nav nav-tabs card-header-tabs nav-fill'>
          <li className='nav-item'>
            <button
              className={`nav-link ${
                showQuestionType === UNANSWERED ? 'active' : ''
              }`}
              value={UNANSWERED}
              onClick={(e) => handleChange(e.target.value)}
            >
              Unanswered Questions
            </button>
          </li>
          <li className='nav-item'>
            <button
              className={`nav-link ${
                showQuestionType === ANSWERED ? 'active' : ''
              }`}
              value={ANSWERED}
              onClick={(e) => handleChange(e.target.value)}
            >
              Answered Questions
            </button>
          </li>
        </ul>
      </div>
      <div className='card-body'>
        {showQuestions.map((question) => (
          <Question key={question} id={question}>
            <QuestionViewPoll />
          </Question>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  authedUser,
  questions,
  users,
  showQuestionType,
}) => {
  let answered = [];
  let unanswered = [];

  if (authedUser && users[authedUser] && Object.keys(questions).length > 0) {
    const { answers } = users[authedUser];
    if (answers) {
      answered = Object.keys(answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      );
      unanswered = Object.keys(questions)
        .filter((q) => !(q in answers))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    }
  }

  return {
    authedUser,
    answered,
    unanswered,
    showQuestionType,
  };
};

export default connect(mapStateToProps)(Dashboard);
