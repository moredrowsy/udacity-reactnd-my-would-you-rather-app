import { SET_USERNAMES } from '../actions/usernames.action';

const initialState = [];

export default function users(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAMES:
      return action.usernames;
    default:
      return state;
  }
}
