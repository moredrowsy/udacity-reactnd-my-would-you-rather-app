import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { setAuthedUser } from '../store/actions/authedUser.action';
import { setShowQuestionType } from '../store/actions/showQuestionType.action';
import { RESET_DASHBOARD } from './Dashboard';
import AppbarLink from './AppbarLink';

function Appbar(props) {
  const { appbarLinks, authedUser, dispatch, history } = props;

  const handleSignout = () => {
    dispatch(setAuthedUser(null)); // Unset user
    dispatch(setShowQuestionType(RESET_DASHBOARD)); // Reset dashboard tabs
    history.push('/');
  };

  return (
    <nav
      className='navbar navbar-expand-md navbar-light bg-white shadow-sm'
      aria-label='Fourth navbar example'
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Would You Rather?
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample04'
          aria-controls='navbarsExample04'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample04'>
          <ul className='navbar-nav mx-auto mb-2 mb-md-0'>
            {appbarLinks.map((appbarLink) => (
              <li className='nav-item' key={appbarLink.path}>
                <AppbarLink
                  name={appbarLink.name}
                  path={appbarLink.path}
                  exact={appbarLink.exact}
                />
              </li>
            ))}
          </ul>
          {authedUser && (
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <div
                  className='nav-path dropdown-toggle'
                  style={{ userSelect: 'none' }}
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {authedUser.name}
                </div>
                <ul className='dropdown-menu dropdown-menu-end'>
                  <li>
                    <button
                      className='dropdown-item'
                      type='button'
                      onClick={handleSignout}
                    >
                      Signout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProp = ({ authedUser, users }) => ({
  authedUser: authedUser && users[authedUser],
});

export default withRouter(connect(mapStateToProp)(Appbar));
