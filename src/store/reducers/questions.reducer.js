import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  UPDATE_QUESTION,
} from '../actions/questions.action';

const initialState = {};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case UPDATE_QUESTION:
      return { ...state, [action.question.id]: action.question };
    default:
      return state;
  }
}
