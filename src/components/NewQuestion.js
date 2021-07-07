import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleAddQuestion } from '../store/actions/questions.action';

export const OPTION_ONE = 'optionOne';
export const OPTION_TWO = 'optionTwo';

function NewQuestion(props) {
  const { authedUser, dispatch, history } = props;
  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = (qId) => history.push(`/questions/${qId}`);
    const onError = (e) => setErrorMsg('Error. Try again.');

    if (authedUser) {
      const questionInfo = {
        optionOneText: optionOne.trim(),
        optionTwoText: optionTwo.trim(),
        author: authedUser,
      };
      dispatch(handleAddQuestion(questionInfo, onSuccess, onError));
    } else {
      setErrorMsg('No authorized user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class='text-center'>Ask a new question!</h2>
      <div className='text-center text-danger'>{errorMsg}</div>
      <h5 className='card-title'>Would you rather...</h5>
      <div className='mb-3'>
        <label htmlFor={OPTION_ONE} className='form-label'>
          Option One
        </label>
        <input
          type='text'
          className='form-control'
          id={OPTION_ONE}
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor={OPTION_TWO} className='form-label'>
          Option Two
        </label>
        <input
          type='text'
          className='form-control'
          id={OPTION_TWO}
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
          required
        />
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary' type='submit'>
          Ask
        </button>
      </div>
    </form>
  );
}

const matchStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(matchStateToProps)(NewQuestion));
