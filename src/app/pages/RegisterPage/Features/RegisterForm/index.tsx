/**
 *
 * RegisterForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Card } from '../../../../components/Card/';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { InputPassword } from '../../../../components/Input/InputPassword';
import { Inputs } from '../../../types/Inputs';

interface Props {}

export function RegisterForm(props: Props) {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data: Inputs) {
    console.log(data.fullname);
    console.log(data.email);
    console.log(data.password);
    console.log(data.confirmpassword);
  }
  return (
    // TODO : validasi form
    <Wrapper>
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign up to course</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            ref={register({ required: true })}
            name="password"
            width="15.625rem"
            placeholder="Create Password"
            type="password"
            error={errors.password}
          />
          <InputPassword
            ref={register({ required: true })}
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
  color: ${p => p.theme.textBlack};
`;

const Form = styled.form``;

const Login = styled.p`
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
