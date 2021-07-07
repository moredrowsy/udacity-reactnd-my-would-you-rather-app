import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../store/actions/users.action.js';
import { SIGNIN } from './Signedout';

function Signup(props) {
  const { dispatch, setNavTab } = props;
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { id: username, name, avatarURL };

    dispatch(
      handleAddUser(
        info,
        (user) => setNavTab(SIGNIN),
        (e) => setErrorMsg(e)
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='text-center text-danger'>{errorMsg}</div>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='avatarURL' className='form-label'>
            Avatar URL
          </label>
          <input
            type='text'
            className='form-control'
            id='avatarURL'
            value={avatarURL}
            onChange={(e) => setAvatarURL(e.target.value)}
          />
        </div>
        <div className='d-grid gap-2'>
          <button className='btn btn-primary' type='submit'>
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default connect()(Signup);
