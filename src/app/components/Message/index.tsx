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
      // TODO: status code error from badri
      return getErrorMessage(gqlErr.extensions?.exception.code);
      // return getErrorMessage(gqlErr.extensions?.exception.response.statusCode);
    });
    return errors;
  }
  function getErrorMessage(code: number) {
    switch (code) {
      case 11000:
        return 'Email telah digunakan';
      default:
        return 'Register Gagal';
    }
  }
  return (
    <Container>
      <Icon name="close-circle" color="red" />
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
