/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

import { ConnectedRouter } from 'connected-react-router';
import { history } from 'router';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './locales/i18n';

import 'rsuite/dist/styles/rsuite-default.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// Initialize languages

const store = configureAppStore(history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </HelmetProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
