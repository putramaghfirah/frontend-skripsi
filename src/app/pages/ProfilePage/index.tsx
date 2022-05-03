/**
 *
 * ProfilePage
 *
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

interface Props {}

export function ProfilePage(props: Props) {
  return (
    <>
      <Helmet>
        <title>Profil Page</title>
      </Helmet>
      <Wrapper>
        <h1>halaman profil</h1>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
`;
