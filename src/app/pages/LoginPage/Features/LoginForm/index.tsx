/**
 *
 * LoginForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginFormActions } from './slice';
import { useLoginFormSlice } from './slice';

interface Props {}

export function LoginForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useLoginFormSlice();

  const { register, handleSubmit } = useForm();

  function onChange({ email, password }: { email: string; password: string }) {
    dispatch(loginFormActions.changeEmail(email));
    dispatch(loginFormActions.changePassword(password));
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onChange)}>
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
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
