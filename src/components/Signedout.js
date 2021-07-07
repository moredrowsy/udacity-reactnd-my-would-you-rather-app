import React, { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';

function Signedout(props) {
  const [navTab, setNavTab] = useState(SIGNIN);

  const showContent =
    navTab === SIGNIN ? <Signin /> : <Signup setNavTab={setNavTab} />;

  const handleChange = (tab) => setNavTab(tab);

  return (
    <div className='card'>
      <div className='card-header'>
        <ul className='nav nav-tabs card-header-tabs nav-fill'>
          <li className='nav-item'>
            <button
              className={`nav-link ${navTab === SIGNIN ? 'active' : ''}`}
              value={SIGNIN}
              onClick={(e) => {
                handleChange(e.target.value);
              }}
            >
              Sign in
            </button>
          </li>
          <li className='nav-item'>
            <button
              className={`nav-link ${navTab === SIGNUP ? 'active' : ''}`}
              value={SIGNUP}
              onClick={(e) => {
                handleChange(e.target.value);
              }}
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
      <div className='card-body'>{showContent}</div>
    </div>
  );
}

export default Signedout;
