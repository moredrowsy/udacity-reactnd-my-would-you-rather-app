import { saveUser } from '../../utils/db/api';
import { formatUser } from '../../utils/db/helpers';
import { showLoading, hideLoading } from 'react-redux-loading';

// ACTIONS
export const ADD_USER = 'ADD_USER';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';

// ACTION CREATORS
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserAnswer(uid, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    uid,
    qid,
    answer,
  };
}

export function addUserQuestion(uid, qid) {
  return {
    type: ADD_USER_QUESTION,
    uid,
    qid,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}

export const handleAddUser = (info, onSuccess, onError) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const user = await saveUser(formatUser(info));
    if (onSuccess) onSuccess(user);
  } catch (e) {
    console.log('Fail handleAddUser()', e);
    if (onError) onError(e.message);
  }

  dispatch(hideLoading());
};
