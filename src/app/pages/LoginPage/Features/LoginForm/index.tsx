/**
 *
 * LoginForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { loginFormActions } from './slice';
import { useLoginFormSlice } from './slice';
import { Link } from 'react-router-dom';

import { Card } from '../../../../components/Card/';
import { Button } from '../../../../components/Button';
import { Input, InputField } from '../../../../components/Input';
import { Icon } from '../../../../components/Icon';

interface Props {}

export function LoginForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  useLoginFormSlice();

  // const { register, handleSubmit } = useForm();

  // function onChange({ email, password }: { email: string; password: string }) {
  //   dispatch(loginFormActions.changeEmail(email));
  //   dispatch(loginFormActions.changePassword(password));
  // }

  return (
    <Wrapper>
      {/* <form onSubmit={handleSubmit(onChange)}>
        <input
          ref={register({ required: true })}
          placeholder="email"
          type="email"
          name="email"
        />
        <input
          ref={register({ required: true })}
          placeholder="password"
          type="password"
          name="password"
        />
        <button type="submit"></button>
      </form> */}
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign in to course</Title>
        <Form>
          <Input width="250px" placeholder="Email" type="email" />
          <Input width="250px" placeholder="Password" type="password" />
          <Button
            width="250px"
            type="submit"
            padding="7px 11px"
            borderRadius="6px"
            fonWeight="600"
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
  color: ${p => p.theme.textBlack};
`;

const OR = styled.p`
  color: ${p => p.theme.textGray};
  margin: 10px;
  font-size: 14px;
`;

const Form = styled.form`
  ${InputField} {
    margin: auto;
    margin-bottom: 15px;
    transition: 0.3s ease-in-out;
  }

  ${InputField}:hover {
    border: 2px solid ${p => p.theme.primary};
  }

  ${InputField}:focus {
    border: 2px solid ${p => p.theme.primary};
    border-radius: 6px;
    outline: none;
  }
`;

const ButtonGoogle = styled.button`
  width: 250px;
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
