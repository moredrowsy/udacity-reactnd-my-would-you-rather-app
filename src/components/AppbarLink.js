import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function AppbarLink(props) {
  const { name, exact, path } = props;
  const routeMatch = useRouteMatch({
    path,
    exact,
  });

  return (
    <Link
      className={`nav-link ${routeMatch && 'active'}`}
      aria-current='page'
      to={path}
    >
      {name}
    </Link>
  );
}

export default AppbarLink;
