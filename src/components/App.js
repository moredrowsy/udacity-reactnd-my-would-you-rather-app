import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleFetchData } from '../store/actions/common.action';

import Appbar from './Appbar';
import Dashboard from './Dashboard';
import Error from './Error';
import LeaderBoard from './LeaderBoard';
import Signedout from './Signedout';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';

const appbarLinks = [
  {
    name: 'Home',
    path: '/',
    exact: true,
  },
  {
    name: 'New Question',
    path: '/add',
    exact: true,
  },
  {
    name: 'Leader Board',
    path: '/leaderboard',
    exact: true,
  },
];

const nonAuthedRoutes = (
  <Switch>
    <Route>
      <Signedout />
    </Route>
  </Switch>
);

const authedRoutes = (
  <Switch>
    <Route {...appbarLinks[0]}>
      <Dashboard />
    </Route>
    <Route {...appbarLinks[1]}>
      <NewQuestion />
    </Route>
    <Route {...appbarLinks[2]}>
      <LeaderBoard />
    </Route>
    <Route path='/questions/:id' exact>
      <QuestionPage />
    </Route>
    <Route>
      <Error />
    </Route>
  </Switch>
);

function App(props) {
  const { authedUser, dispatch, loading } = props;

  useEffect(() => {
    if (authedUser) dispatch(handleFetchData());
  }, [authedUser, dispatch]);

  return (
    <>
      <Appbar appbarLinks={appbarLinks} />
      <LoadingBar />
      <div className='container mt-3 mx-auto' style={{ maxWidth: '640px' }}>
        {authedUser ? (!loading ? authedRoutes : null) : nonAuthedRoutes}
      </div>
    </>
  );
}

const mapStateToProps = ({ authedUser, loading }) => ({
  authedUser,
  loading,
});

export default connect(mapStateToProps)(App);
