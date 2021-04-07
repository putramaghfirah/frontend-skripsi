/**
 *
 * GuardedRoute
 *
 */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from 'app/user/selectors';

// interface Props {
//   path: string;
//   exact: boolean;
//   component: React.ReactNode;
// }

export function GuardedRoute(props: RouteProps) {
  const user = useSelector(selectUser);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
}
