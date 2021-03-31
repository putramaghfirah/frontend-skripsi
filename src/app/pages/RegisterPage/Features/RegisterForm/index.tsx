/**
 *
 * RegisterForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { Card } from '../../../../components/Card/';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { InputPassword } from '../../../../components/Input/InputPassword';

interface Props {}

export function RegisterForm(props: Props) {
  return (
    <Wrapper>
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign up to course</Title>
        <Form>
          <Input width="15.625rem" placeholder="Full Name" type="text" />
          <Input width="15.625rem" placeholder="Email" type="email" />
          <InputPassword
            width="15.625rem"
            placeholder="Create Password"
            type="password"
          />
          <InputPassword
            width="15.625rem"
            placeholder="Confirm Password"
            type="password"
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
