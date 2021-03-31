/**
 *
 * LoginPage
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLazyQuery, gql } from '@apollo/client';

import {
  selectEmail,
  selectPassword,
} from './Features/LoginForm/slice/selectors';

import { LoginForm } from './Features/LoginForm';
import { Helmet } from 'react-helmet-async';

const LOGIN = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

interface Props {}

export function LoginPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const [login] = useLazyQuery(LOGIN);

  function onLogin() {
    login({
      variables: {
        email,
        password,
      },
    });
  }

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
