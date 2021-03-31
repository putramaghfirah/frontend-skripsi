/**
 *
 * RegisterPage
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { RegisterForm } from './Features/RegisterForm';
import { Helmet } from 'react-helmet-async';

interface Props {}

export function RegisterPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <RegisterForm />
    </React.Fragment>
  );
}
