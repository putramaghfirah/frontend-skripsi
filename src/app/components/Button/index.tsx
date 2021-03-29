/**
 *
 * Button
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  padding?: string;
  width?: string;
  color?: 'primary' | 'textGray';
  borderRadius?: string;
  type?: 'submit' | 'button';
  fonWeight?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: Props) {
  return (
    <Buttons
      width={props.width}
      onClick={props.onClick}
      type={props.type}
      color={props.color}
      padding={props.padding}
      borderRadius={props.borderRadius}
      fontWeight={props.fonWeight}
    >
      {props.children}
    </Buttons>
  );
}

const Buttons = styled.button<{
  padding?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  fontWeight?: string;
}>`
  width: ${p => p.width};
  border-radius: ${p => p.borderRadius};
  background-color: ${p => p.theme[p.color ? p.color : 'primary']};
  padding: ${p => p.padding};
  border: transparent;
  color: white;
  transition: 0.2s;
  font-size: 16px;
  font-weight: ${p => (p.fontWeight ? p.fontWeight : '500')};

  :hover {
    outline: none;
    background-color: ${p => p.theme.primaryHover};
  }

  :focus {
    border: transparent;
    outline: none;
  }
`;
