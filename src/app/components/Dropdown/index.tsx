/**
 *
 * Dropdown
 *
 */
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Dropdown(props: Props) {
  const [show, setShow] = useState(false);

  function onClick() {
    setShow(!show);
  }
  return (
    <Dropdowns onClick={onClick}>
      <Image src="/assets/img/default.png" />
      {show && (
        <Wrap>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Wrap>
      )}
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
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #ddd;
  }
`;
