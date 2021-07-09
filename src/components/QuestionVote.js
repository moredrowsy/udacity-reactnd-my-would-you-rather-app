import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../store/actions/questions.action';
import { OPTION_ONE, OPTION_TWO } from './NewQuestion';

function QuestionVote(props) {
  const { authedUser, dispatch, question } = props;
  const { optionOne, optionTwo } = question;
  const [radio, setRadio] = useState(OPTION_ONE);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (value) => setRadio(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onError = (e) => setErrorMsg('Error. Try again.');

    const voteInfo = {
      authedUser: authedUser.id,
      qid: question.id,
      answer: radio,
    };
    dispatch(handleSaveQuestionAnswer(voteInfo, undefined, onError));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <h5 className='card-title'>Would you rather...</h5>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div className='text-center text-danger'>{errorMsg}</div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name={OPTION_ONE}
            id={OPTION_ONE}
            value={OPTION_ONE}
            checked={radio === OPTION_ONE}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className='form-check-label card-text' htmlFor={OPTION_ONE}>
            {optionOne.text}
          </label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name={OPTION_TWO}
            id={OPTION_TWO}
            value={OPTION_TWO}
            checked={radio === OPTION_TWO}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className='form-check-label card-text' htmlFor={OPTION_TWO}>
            {optionTwo.text}
          </label>
        </div>
        <div>
          <button className='btn btn-outline-primary w-100' type='submit'>
            Vote
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect()(QuestionVote);
