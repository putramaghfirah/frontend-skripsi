import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Loader } from 'rsuite';

export function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>halaman Home</h1>
    </React.Fragment>
  );
}
