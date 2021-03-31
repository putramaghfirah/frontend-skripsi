/**
 *
 * Input
 *
 */
import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'email' | 'text';
  width?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <FormGroup>
    <InputField
      ref={ref}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      width={props.width}
    />
    {props.error && <Error>This field is required</Error>}
  </FormGroup>
));

export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

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

const slideDownFade = keyframes`
  0% {
    opacity: 0;
    margin-top: -10px;
    }
  100% {
    opacity: 1;
  }
`;

export const Error = styled.span`
  position: absolute;
  font-size: 10px;
  left: 20%;
  opacity: 0;
  color: red;
  font-style: italic;
  animation: ${slideDownFade} 0.4s forwards;
`;
