/**
 *
 * Card
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
}

export function Card({ height, width, children, padding, margin }: Props) {
  return (
    <Container width={width} height={height} padding={padding} margin={margin}>
      {children}
    </Container>
  );
}

const Container = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}>`
  width: ${p => p.width};
  height: ${p => p.height};
  padding: ${p => p.padding};
  text-align: center;
  margin: ${p => p.margin};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.4s ease-in-out;
  color: ${p => p.theme.textBlack};
  // :hover {
  //   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  //   border: transparent;
  // }
`;
