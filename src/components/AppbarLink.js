import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function AppbarLink(props) {
  const { name, exact, path } = props;
  const routeMatch = useRouteMatch({
    path,
  });

  let isActive = false;
  if (routeMatch) {
    if (!exact || (exact && routeMatch.isExact)) {
      isActive = true;
    }
  }

  return (
    <Link
      className={`nav-link ${isActive ? 'active' : ''}`}
      aria-current='page'
      to={path}
    >
      {name}
    </Link>
  );
}

export default AppbarLink;
