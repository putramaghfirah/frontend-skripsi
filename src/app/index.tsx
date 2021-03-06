/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { RegisterPage } from './pages/RegisterPage/Loadable';
import { ProfilePage } from './pages/ProfilePage/Loadable';
import { AdminHomePage } from './pages/Admin/AdminHomePage/Loadable';
import { UnauthorizedPage } from './pages/UnauthorizedPage/Loadable';

import { useTranslation } from 'react-i18next';
import { GuardedRoute } from './components/GuardedRoute';
import { useUserSlice } from 'app/user';

import { Navbar } from './components/Navbar';

export function App() {
  useUserSlice();
  const { i18n } = useTranslation();
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - Course Online"
        defaultTitle="Course Online"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Aplikasi Course Online" />
      </Helmet>
      {/* {admin ? <NavbarAdmin/> : <Navbar>} */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/unauthorized" component={UnauthorizedPage} />
        <GuardedRoute exact path="/profile" component={ProfilePage} />
        <GuardedRoute
          exact
          roles={['ADMIN']}
          path="/admin"
          component={AdminHomePage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
