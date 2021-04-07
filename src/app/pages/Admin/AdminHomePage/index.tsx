/**
 *
 * AdminHomePage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectRole } from 'app/user/selectors';

interface Props {}

export function AdminHomePage(props: Props) {
  const role = useSelector(selectRole);
  return (
    <React.Fragment>
      <H1>Halaman {role}</H1>
      <H1>tes</H1>
    </React.Fragment>
  );
}

const H1 = styled.h1``;
