import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';

export function HomePage() {
  // const dispatch = useDispatch();

  // function onClick() {
  //   dispatch(push('/login'));
  // }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>halaman Home</h1>
    </>
  );
}
