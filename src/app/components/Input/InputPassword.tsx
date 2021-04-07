import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { DeepMap, FieldErrors, FieldValues } from 'react-hook-form';

import { Icon } from '../Icon';
import { InputField, FormGroup } from '../Input';
import { Error } from './index';

interface Props {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'text';
  width?: string;
  error?: DeepMap<FieldValues, FieldErrors>;
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
        {props.error?.type === 'minLength' && (
          <Error>The passwords must be more than 8 characters</Error>
        )}
        {props.error?.type === 'required' && (
          <Error>This field is required</Error>
        )}
        {props.error?.type === 'validate' && (
          <Error>The passwords do not match</Error>
        )}
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
  padding: 0.75rem 0;
  cursor: pointer;
`;
