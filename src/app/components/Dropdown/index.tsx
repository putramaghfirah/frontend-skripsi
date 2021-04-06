/**
 *
 * Dropdown
 *
 */
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
}

export function Dropdown({ children }: Props) {
  const [show, setShow] = useState(false);

  function onClick() {
    setShow(!show);
  }
  return (
    <Dropdowns onClick={onClick}>
      <Image src="/assets/img/default.png" />
      {show && <Wrap>{children}</Wrap>}
    </Dropdowns>
  );
}

const Dropdowns = styled.div`
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Wrap = styled.div`
  display: block;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 4px 4px rgb(0 0 0 / 12%);
  z-index: 1;
  padding: 6px 0;
  transition: 0.2s;
  a {
    color: ${p => p.theme.textGray};
    padding: 8px 12px;
    font-size: 0.875rem;
    text-decoration: none;
    display: block;
    transition: 0.2s;
  }

  a:hover {
    background-color: #f2faff;
  }
`;
