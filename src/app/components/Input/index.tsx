/**
 *
 * Input
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'email' | 'text';
  width?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputField
    ref={ref}
    name={props.name}
    placeholder={props.placeholder}
    type={props.type}
    width={props.width}
  />
));

export const InputField = styled.input<{ width?: string }>`
  display: block;
  width: ${p => p.width};
  color: #575757;
  background-color: #fff;
  border: 2px solid #e5e5ea;
  border-radius: 6px;
  padding: 7px 11px;
  font-size: 14px;
  font-weight: 500;
  margin: auto;
  margin-bottom: 15px;
  transition: 0.3s ease-in-out;

  ::placeholder {
    font-size: 14px;
    color: black;
  }
  :hover {
    border: 2px solid ${p => p.theme.primary};
  }

  :focus {
    border: 2px solid ${p => p.theme.primary};
    border-radius: 6px;
    outline: none;
  }
`;
