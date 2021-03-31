import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';

import { Icon } from '../Icon';
import { InputField } from '../Input';

interface Props {
  name?: string;
  placeholder?: string;
  type?: 'password' | 'text';
  width?: string;
}

export const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password');
    function onClick() {
      type === 'password' ? setType('text') : setType('password');
    }
    return (
      <Group>
        <InputField
          ref={ref}
          name={props.name}
          placeholder={props.placeholder}
          type={type}
          width={props.width}
        />
        <Span onClick={onClick}>
          <Icon name="eye" color="rgba(24, 24, 25, 0.7)" />
        </Span>
      </Group>
    );
  },
);

const Group = styled.div`
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  right: 23%;
  padding: 0.5rem 0;
`;
