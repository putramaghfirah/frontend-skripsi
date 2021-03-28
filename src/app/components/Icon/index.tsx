/**
 *
 * Icon
 *
 */
import * as React from 'react';

interface Props {
  name: string;
}

export function Icon(props: Props) {
  return React.createElement('ion-icon', {
    name: props.name,
  });
}
