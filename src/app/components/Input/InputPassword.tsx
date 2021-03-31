import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';

import { Icon } from '../Icon';
import { InputField, FormGroup } from '../Input';
import { Error } from './index';

interface Props {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'text';
  width?: string;
  error?: string;
}

export const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password');
    function onClick() {
      type === 'password' ? setType('text') : setType('password');
    }
    return (
      <FormGroup>
        <InputField
          ref={ref}
          name={props.name}
          placeholder={props.placeholder}
          type={type}
          width={props.width}
        />
        {props.error && <Error>This field is required</Error>}
        <Visibility onClick={onClick}>
          <Icon name="eye" color="rgba(24, 24, 25, 0.7)" />
        </Visibility>
      </FormGroup>
    );
  },
);

const Visibility = styled.span`
  position: absolute;
  top: 0;
  right: 23%;
  padding: 0.5rem 0;
`;
