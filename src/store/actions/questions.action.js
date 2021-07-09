import { saveQuestion, saveQuestionAnswer } from '../../utils/db/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { addUserAnswer, addUserQuestion } from './users.action';

// ACTIONS
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_USER_VOTE_TO_QUESTION = 'ADD_USER_VOTE_TO_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

// ACTION CREATORS
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addQuestionVoteFromUser(qid, answer, uid) {
  return {
    type: ADD_USER_VOTE_TO_QUESTION,
    qid,
    answer,
    uid,
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
export const handleAddQuestion =
  ({ optionOneText, optionTwoText, author }, onSuccess, onError) =>
  async (dispatch) => {
    dispatch(showLoading());

    try {
      const question = await saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      });

      // Update user and question locally
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(author, question.id));

      if (onSuccess) onSuccess(question.id);
    } catch (e) {
      console.log('Fail handleSaveQuestionAnswer()', e);
      if (onError) onError(e.message);
    }

    dispatch(hideLoading());
  };

export const handleSaveQuestionAnswer =
  ({ authedUser, qid, answer }, onSuccess, onError) =>
  async (dispatch, getState) => {
    dispatch(showLoading());

    try {
      await saveQuestionAnswer({ authedUser, qid, answer });

      // Update user and question locally
      dispatch(addUserAnswer(authedUser, qid, answer));
      dispatch(addQuestionVoteFromUser(qid, answer, authedUser));

      if (onSuccess) onSuccess();
    } catch (e) {
      console.log('Fail handleSaveQuestionAnswer()', e);
      if (onError) onError(e.message);
    }

    dispatch(hideLoading());
  };
