import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../store/actions/questions.action';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

function QuestionAsk(props) {
  const { authedUser, dispatch, question } = props;
  const { optionOne, optionTwo } = question;
  const [radio, setRadio] = useState(OPTION_ONE);

  const handleChange = (value) => setRadio(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveQuestionAnswer({
        authedUser: authedUser.id,
        qid: question.id,
        answer: radio,
      })
    );
  };

  return (
    <>
      <h5 className='card-title'>Would you rather...</h5>
      <form onSubmit={handleSubmit}>
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
        <div className='d-grid gap-2'>
          <button className='btn btn-outline-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default connect()(QuestionAsk);
