import * as React from 'react';
import { render } from '@testing-library/react';

import { LoginPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<LoginPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoginPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
