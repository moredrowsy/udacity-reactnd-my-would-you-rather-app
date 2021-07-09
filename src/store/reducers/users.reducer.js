import {
  ADD_USER,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  RECEIVE_USERS,
  UPDATE_USER,
} from '../actions/users.action';

const initialState = {};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      if (action.user in state) return state;
      else return { ...state, ...action.user };
    case ADD_USER_ANSWER:
      console.log('add user answer', action);
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers: {
            ...state[action.uid].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          questions: [...state[action.uid].questions, action.qid],
        },
      };
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case UPDATE_USER:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
}
