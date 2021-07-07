import { getInitialData } from '../../utils/db/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setLoading } from './loading.action';
import { receiveQuestions } from './questions.action';
import { receiveUsers } from './users.action';

// ASYNC ACTION CREATORS
export const handleFetchData = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const { questions, users } = await getInitialData();
    dispatch(receiveUsers(users)); // Dispatch receiveUsers first
    dispatch(receiveQuestions(questions));
    dispatch(setLoading(false));
    dispatch(hideLoading());
  } catch (e) {
    console.log('Fail handleFetchData()', e);
  }
};
