/**
 *
 * GuardedRoute
 *
 */
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from 'app/user/selectors';

interface Props {
  roles?: string[];
}

export function GuardedRoute(props: RouteProps & Props) {
  const user = useSelector(selectUser);

  if (!user) {
    return <Redirect to="/login" />;
  }
  if (props.roles) {
    if (!user.roles.some(role => props.roles!.includes(role)))
      return <Redirect to="/unauthorized" />;
  }
  return <Route {...props} />;
}
