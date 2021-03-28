/**
 *
 * LoginPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLazyQuery, gql } from '@apollo/client';

import {
  selectEmail,
  selectPassword,
} from './Features/LoginForm/slice/selectors';

import { LoginForm } from './Features/LoginForm';

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

  const [login, { data, loading, error }] = useLazyQuery(LOGIN);

  function onLogin() {
    login({
      variables: {
        email,
        password,
      },
    });
  }

  return (
    <Div>
      <LoginForm />
      <button onClick={() => onLogin()}>login</button>
    </Div>
  );
}

const Div = styled.div`
  color: ${p => p.theme.boh};
`;
