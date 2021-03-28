import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export function HomePage() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(push('/login'));
  }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <button onClick={onClick}>to login</button>
    </>
  );
}
