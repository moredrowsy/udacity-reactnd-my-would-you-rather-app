import { saveUser } from '../../utils/db/api';
import { formatUser } from '../../utils/db/helpers';
import { showLoading, hideLoading } from 'react-redux-loading';

// ACTIONS
export const ADD_USER = 'ADD_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

// ACTION CREATORS
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users,
  };
}

export const handleAddUser =
  (info, successCallback, errorCallback) => async (dispatch) => {
    try {
      dispatch(showLoading());
      try {
        const user = await saveUser(formatUser(info));
        successCallback(user);
      } catch (e) {
        errorCallback(e.message);
      }
      dispatch(hideLoading());
    } catch (e) {
      console.log('Fail handleAddUser()', e);
    }
  };
