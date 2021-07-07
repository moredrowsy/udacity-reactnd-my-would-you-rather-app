import { SET_LOADING } from '../actions/loading.action';

const initialState = true;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}
