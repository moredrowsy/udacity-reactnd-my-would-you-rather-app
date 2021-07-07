import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUser from './authedUser.reducer';
import loading from './loading.reducer.js';
import questions from './questions.reducer';
import showQuestionType from './showQuestionType.reducer';
import users from './users.reducer';
import usernames from './usernames.reducer';

export default combineReducers({
  authedUser,
  loading,
  loadingBar: loadingBarReducer,
  questions,
  showQuestionType,
  users,
  usernames,
});
