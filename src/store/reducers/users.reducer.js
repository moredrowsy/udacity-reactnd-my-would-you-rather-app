import { ADD_USER, RECEIVE_USERS } from '../actions/users.action';

const initialState = {};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      if (action.user in state) return state;
      else return { ...state, ...action.user };
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
