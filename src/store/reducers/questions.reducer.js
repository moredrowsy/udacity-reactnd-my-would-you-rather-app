import {
  ADD_QUESTION,
  ADD_USER_VOTE_TO_QUESTION,
  RECEIVE_QUESTIONS,
  UPDATE_QUESTION,
} from '../actions/questions.action';

const initialState = {};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case ADD_USER_VOTE_TO_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.uid],
          },
        },
      };
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case UPDATE_QUESTION:
      return { ...state, [action.question.id]: action.question };
    default:
      return state;
  }
}
