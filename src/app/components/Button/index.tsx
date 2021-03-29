/**
 *
 * Button
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  padding?: string;
  color?: 'primary' | 'alert';
  borderRadius?: string;
  children?: React.ReactNode;
}

export function Button(props: Props) {
  return (
    <Buttons
      color={props.color}
      padding={props.padding}
      borderRadius={props.borderRadius}
    >
      {props.children}
    </Buttons>
  );
}

const Buttons = styled.button<{
  padding?: string;
  color?: string;
  borderRadius?: string;
}>`
  border-radius: ${p => p.borderRadius};
  border: transparent;
  background-color: ${p => p.theme[p.color ? p.color : 'primary']};
  color: white;
  padding: ${p => p.padding};
  transition: 0.2s;

  :hover {
    outline: none;
    background-color: ${p => p.theme.primaryHover};
  }

  :focus {
    border: transparent;
    outline: none;
  }
`;
