import { saveQuestion, saveQuestionAnswer } from '../../utils/db/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { updateUser } from './users.action';

// ACTIONS
export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

// ACTION CREATORS
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions,
  };
}

export function updateQuestion(question) {
  return {
    type: UPDATE_QUESTION,
    question,
  };
}

// ASYNC ACTION CREATORS
export const handleAddQuestion = () => (dispatch, getState) => {};

export const handleSaveQuestionAnswer =
  ({ authedUser, qid, answer }) =>
  async (dispatch, getState) => {
    try {
      dispatch(showLoading());
      console.log('info', authedUser, qid, answer);
      await saveQuestionAnswer({ authedUser, qid, answer });

      // saveQuestionAnswer does not return updated users or questions
      // We need to update this locally instead of waiting 2 seconds to get
      // updated users and questions
      const { questions, users } = getState();
      const question = questions[qid];
      const user = users[authedUser];

      const updatedUser = {
        ...user,
        answers: {
          ...user.answers,
          [qid]: answer,
        },
      };

      const updatedQuestion = {
        ...question,
        [answer]: {
          ...question[answer],
          votes: [...question[answer].votes, authedUser],
        },
      };

      console.log('updateUser', updateUser);
      console.log('updatedQuestion', updatedQuestion);
      dispatch(updateUser(updatedUser));
      dispatch(updateQuestion(updatedQuestion));

      dispatch(hideLoading());
    } catch (e) {
      console.log('Fail handleSaveQuestionAnswer()', e);
    }
  };
