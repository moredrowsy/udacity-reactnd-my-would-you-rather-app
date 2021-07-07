import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions.action';

const initialState = {};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    default:
      return state;
  }
}
