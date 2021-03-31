/**
 *
 * Icon
 *
 */
import * as React from 'react';

interface Props {
  name: string;
  color?: string;
  fontSize?: string;
}

export function Icon(props: Props) {
  return React.createElement('ion-icon', {
    name: props.name,
    style: {
      color: props.color,
      fontSize: props.color,
    },
  });
}
