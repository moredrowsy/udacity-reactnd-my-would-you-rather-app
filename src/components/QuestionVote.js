import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../store/actions/questions.action';
import { OPTION_ONE, OPTION_TWO } from './NewQuestion';

const options = [OPTION_ONE, OPTION_TWO];

function QuestionVote(props) {
  const { authedUser, dispatch, question } = props;
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
        {options.map((option) => (
          <div className='form-check' key={option}>
            <input
              className='form-check-input'
              type='radio'
              name={option}
              id={option}
              value={option}
              checked={radio === option}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label className='form-check-label card-text' htmlFor={option}>
              {question[option].text}
            </label>
          </div>
        ))}
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
