/**
 *
 * LoginForm
 *
 */
import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { loginFormActions } from './slice';
// import { useLoginFormSlice } from './slice';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import { userActions } from 'app/user';

import { Card } from 'app/components/Card/';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { InputPassword } from 'app/components/Input/InputPassword';
import { Icon } from 'app/components/Icon';
import { Inputs } from 'app/pages/types/Inputs';
import { Message } from 'app/components/Message';

interface Props {}

const LOGIN = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const MY_PROFILE = gql`
  query {
    myProfile {
      full_name
      email
    }
  }
`;

export function LoginForm(props: Props) {
  const dispatch = useDispatch();

  const [login, { data, error }] = useLazyQuery(LOGIN);
  const [profil, { data: user }] = useLazyQuery(MY_PROFILE);

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(userActions.setUser(user));
        dispatch(push('/'));
      }
    }
  });

  function onSubmit(data: Inputs) {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    profil();
  }

  return (
    <Wrapper>
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign in to course</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {error && <Message error={error} />}
          <Input
            name="email"
            ref={register({ required: true })}
            width="15.625rem"
            placeholder="Email"
            type="email"
            error={errors.email}
          />
          <InputPassword
            name="password"
            ref={register({ required: true })}
            width="15.625rem"
            placeholder="Password"
            type="password"
            error={errors.password}
          />
          <Button
            width="15.625rem"
            type="submit"
            padding="7px 11px"
            borderRadius="6px"
            fonWeight="600"
            color="white"
          >
            Log in
          </Button>
        </Form>
        <OR>OR</OR>
        <ButtonGoogle>
          <Icon name="logo-google" />
          Log in with Google
        </ButtonGoogle>
        <Register>
          No Account? <Link to="/register">Create One</Link>
        </Register>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  letter-spacing: -0.02em;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${p => p.theme.textBlack};
`;

const OR = styled.p`
  color: ${p => p.theme.textGray};
  margin: 10px;
  font-size: 14px;
`;

const Form = styled.form``;

const ButtonGoogle = styled.button`
  width: 15.625rem;
  padding: 7px 11px;
  border-radius: 6px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.15);
  color: rgba(24, 24, 25, 0.7);
  transition: 0.2s;
  font-weight: 600;
  font-size: 16px;

  :focus {
    outline: none;
  }

  :hover {
    border: 2px solid ${p => p.theme.textBlack};
    color: ${p => p.theme.textBlack};
  }
`;

const Register = styled.p`
  margin-top: 10px;
  font-size: 12.5px;
  font-weight: 600;
  color: ${p => p.theme.textBlack};
  a {
    color: ${p => p.theme.primary};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
