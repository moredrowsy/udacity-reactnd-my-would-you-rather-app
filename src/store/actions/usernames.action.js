import { getUsernames } from '../../utils/db/api';
import { showLoading, hideLoading } from 'react-redux-loading';

// ACTIONS
export const SET_USERNAMES = 'SET_USERNAMES';

// ACTION CREATORS
export function setUsernames(usernames) {
  return {
    type: SET_USERNAMES,
    usernames,
  };
}

// ASYNC ACTION CREATORS
export const handleGetUsernames = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const usernames = await getUsernames();
    dispatch(setUsernames(usernames)); // Dispatch receiveUsers first
    dispatch(hideLoading());
  } catch (e) {
    console.log('Fail handleGetUsernames()', e);
  }
};
