import React from 'react';
import { connect } from 'react-redux';

function QuestionAsk(props) {
  const { question } = props;
  const { optionOne, optionTwo } = question;

  return (
    <>
      <h5 className='card-title'>Would you rather...</h5>
      <form>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='flexRadioDefault1'
          />
          <label
            className='form-check-label card-text'
            htmlFor='flexRadioDefault1'
          >
            {optionOne.text}
          </label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='flexRadioDefault'
            id='flexRadioDefault2'
          />
          <label
            className='form-check-label card-text'
            htmlFor='flexRadioDefault2'
          >
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
