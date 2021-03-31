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
import { Input, InputField } from '../../../../components/Input';
// import { Icon } from '../../../../components/Icon';

interface Props {}

export function RegisterForm(props: Props) {
  return (
    <Wrapper>
      <Card padding="20px" margin="20px" width="450px">
        <Title>Sign up to course</Title>
        <Form>
          <Input width="250px" placeholder="Full Name" type="text" />
          <Input width="250px" placeholder="Email" type="email" />
          <Input width="250px" placeholder="Create Password" type="password" />
          <Input width="250px" placeholder="Confirm Password" type="password" />
          <Button
            width="250px"
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
