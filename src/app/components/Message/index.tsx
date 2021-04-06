/**
 *
 * Message
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { ApolloError } from '@apollo/client';

import { Icon } from '../Icon';

interface Props {
  error: ApolloError;
}

export function Message({ error }: Props) {
  function getErrorMessages(error: ApolloError): string[] {
    const errors: string[] = error.graphQLErrors.map(gqlErr => {
      return getErrorMessage(gqlErr.message);
    });
    return errors;
  }
  function getErrorMessage(code: string) {
    switch (code) {
      case 'Email provided is used!':
        return 'Email provided is used!';
      case 'Wrong Password!':
        return 'Wrong Password!';
      case 'User Not found!':
        return 'User Not Found!';
      default:
        return 'Failed';
    }
  }
  return (
    <Container>
      <Icon padding="0 3px" fontSize="18px" name="close-circle" color="red" />
      {getErrorMessages(error)}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 100%;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 6px;
  background-color: #fde9ef;
  color: ${p => p.theme.textGray};
  font-size: 14px;
  padding: 20px;
  /* box-sizing: border-box; */
`;
