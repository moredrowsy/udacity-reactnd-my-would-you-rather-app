import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { handleGetUsernames } from '../store/actions/usernames.action';
import { setAuthedUser } from '../store/actions/authedUser.action';

function Signin(props) {
  const { dispatch, usernames } = props;
  const selection = useRef(null);

  useEffect(() => {
    dispatch(handleGetUsernames());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = selection && selection.current.value;
    if (username) dispatch(setAuthedUser(username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-center'>Choose a user to sign in</legend>
          <div className='mb-3'>
            <label htmlFor='usernames' className='form-label'></label>
            <select id='usernames' className='form-select' ref={selection}>
              {usernames.map((username) => (
                <option key={username} value={username}>
                  {username}
                </option>
              ))}
            </select>
          </div>
          <div className='d-grid gap-2'>
            <button className='btn btn-primary' type='submit'>
              Signin
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const mapStateToProps = ({ usernames }) => ({
  usernames: usernames.sort(),
});

export default connect(mapStateToProps)(Signin);
