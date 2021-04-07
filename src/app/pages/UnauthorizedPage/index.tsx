/**
 *
 * UnauthorizedPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

interface Props {}

export function UnauthorizedPage(props: Props) {
  return (
    <>
      <Helmet>
        <title>401 Unauthorized</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😓
          </span>
          1
        </Title>
        <P>You don't have access to this page</P>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: black;
  text-align: center;
`;
