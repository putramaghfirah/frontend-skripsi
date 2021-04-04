/**
 *
 * RegisterForm
 *
 */
import * as React from 'react';
import { useRef } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// rsuite
import { Alert } from 'rsuite';

import { Card } from 'app/components/Card/';
import { Button } from 'app/components/Button';
import { Input } from 'app/components/Input';
import { InputPassword } from 'app/components/Input/InputPassword';
import { Message } from 'app/components/Message';
import { Inputs } from 'app/pages/types/Inputs';

interface Props {}

// query mutation
const CREATE_USER = gql`
  mutation($email: String!, $password: String!, $full_name: String!) {
    createUser(email: $email, password: $password, full_name: $full_name) {
      full_name
      email
    }
  }
`;

export function RegisterForm(props: Props) {
  const [createUser, { error }] = useMutation(CREATE_USER);
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
  });

  const checkPassword = useRef({});
  checkPassword.current = watch('password', '');

  const dispatch = useDispatch();

  function onSubmit(data: Inputs) {
    createUser({
      variables: {
        email: data.email,
        full_name: data.fullname,
        password: data.confirmpassword,
      },
    })
      .then(_data => {
        Alert.success('Register Success.', 1000);
        setTimeout(() => {
          dispatch(push('/login'));
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign up to course</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {error && <Message error={error} />}
          <Input
            ref={register({ required: true })}
            name="fullname"
            width="15.625rem"
            placeholder="Full Name"
            type="text"
            error={errors.fullname}
          />
          <Input
            ref={register({ required: true })}
            name="email"
            width="15.625rem"
            placeholder="Email"
            type="email"
            error={errors.email}
          />
          <InputPassword
            ref={register({ required: true, minLength: 8 })}
            name="password"
            width="15.625rem"
            placeholder="Create Password"
            type="password"
            error={errors.password}
          />
          <InputPassword
            ref={register({
              required: true,
              minLength: 8,
              validate: value => value === checkPassword.current || false,
            })}
            name="confirmpassword"
            width="15.625rem"
            placeholder="Confirm Password"
            type="password"
            error={errors.confirmpassword}
          />
          <Button
            width="15.625rem"
            type="submit"
            padding="7px 11px"
            borderRadius="6px"
            fonWeight="600"
          >
            Create Account
          </Button>
        </Form>
        <Login>
          Already have an Account? <Link to="/login">Log in</Link>
        </Login>
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

const Form = styled.form``;

const Login = styled.p`
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
