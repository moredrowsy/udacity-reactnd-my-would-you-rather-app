import React from 'react';
import { connect } from 'react-redux';

import { setShowQuestionType } from '../store/actions/showQuestionType.action';
import CardTab from './CardTab';
import Question from './Question';
import QuestionViewPoll from './QuestionViewPoll';

const ASKED = 'ASKED';
const ANSWERED = 'ANSWERED';
const UNANSWERED = 'UNANSWERED';
const tabs = [
  {
    title: 'Unanswered Questions',
    value: UNANSWERED,
  },
  {
    title: 'Answered Questions',
    value: ANSWERED,
  },
  {
    title: 'Asked Questions',
    value: ASKED,
  },
];

function Dashboard(props) {
  const { asked, answered, unanswered, dispatch, showQuestionType } = props;

  let showQuestions = [];
  switch (showQuestionType) {
    case UNANSWERED:
      showQuestions = unanswered;
      break;
    case ANSWERED:
      showQuestions = answered;
      break;
    case ASKED:
      showQuestions = asked;
      break;
    default:
      showQuestions = [];
  }

  const handleChange = (answerType) =>
    dispatch(setShowQuestionType(answerType));

  return (
    <div className='card'>
      <div className='card-header'>
        <ul className='nav nav-tabs card-header-tabs nav-fill'>
          {tabs.map((tab) => (
            <CardTab
              key={tab.value}
              title={tab.title}
              value={tab.value}
              currentValue={showQuestionType}
              handleChange={handleChange}
            />
          ))}
        </ul>
      </div>
      <div className='card-body'>
        {showQuestions.length > 0 ? (
          showQuestions.map((question) => (
            <Question key={question} id={question}>
              <QuestionViewPoll />
            </Question>
          ))
        ) : (
          <div className='text-center'>
            There are no {showQuestionType.toLowerCase()} questions.
          </div>
        )}
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
  let asked = [];

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
    asked = users[authedUser].questions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
  }

  return {
    authedUser,
    asked,
    answered,
    unanswered,
    showQuestionType,
  };
};

export default connect(mapStateToProps)(Dashboard);
