import { saveQuestion, saveQuestionAnswer } from '../../utils/db/api';

// ACTIONS
export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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

// ASYNC ACTION CREATORS
export const handleAddQuestion = () => (dispatch, getState) => {};
