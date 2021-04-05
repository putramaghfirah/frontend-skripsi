/**
 *
 * LoginPage
 *
 */
import * as React from 'react';

import { LoginForm } from './Features/LoginForm';
import { Helmet } from 'react-helmet-async';

interface Props {}

export function LoginPage(props: Props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <LoginForm />
      {/* <button onClick={() => onLogin()}>login</button> */}
    </React.Fragment>
  );
}
