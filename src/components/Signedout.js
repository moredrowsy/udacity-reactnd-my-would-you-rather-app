import React, { useState } from 'react';

import CardTab from './CardTab';
import Signin from './Signin';
import Signup from './Signup';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
const tabs = [
  {
    title: 'Sign in',
    value: SIGNIN,
  },
  {
    title: 'Sign up',
    value: SIGNUP,
  },
];

function Signedout(props) {
  const [navTab, setNavTab] = useState(SIGNIN);

  const showContent =
    navTab === SIGNIN ? <Signin /> : <Signup setNavTab={setNavTab} />;

  const handleChange = (tab) => setNavTab(tab);

  return (
    <div className='card'>
      <div className='card-header'>
        <ul className='nav nav-tabs card-header-tabs nav-fill'>
          {tabs.map((tab) => (
            <CardTab
              key={tab.value}
              title={tab.title}
              value={tab.value}
              currentValue={navTab}
              handleChange={handleChange}
            />
          ))}
        </ul>
      </div>
      <div className='card-body'>{showContent}</div>
    </div>
  );
}

export default Signedout;
