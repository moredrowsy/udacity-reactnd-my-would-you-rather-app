import { SET_AUTHED_USER } from '../actions/authedUser.action';

const initialState = null;

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
