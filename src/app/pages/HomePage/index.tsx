import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Loader } from 'rsuite';

import { useSelector } from 'react-redux';
import { selectRole } from '../../user/selectors';
export function HomePage() {
  const role = useSelector(selectRole);
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>halaman Home</h1>
      <h1>halaman {role}</h1>
    </React.Fragment>
  );
}
