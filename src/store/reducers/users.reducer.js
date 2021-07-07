import { ADD_USER, RECEIVE_USERS, UPDATE_USER } from '../actions/users.action';

const initialState = {};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      if (action.user in state) return state;
      else return { ...state, ...action.user };
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case UPDATE_USER:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
}
