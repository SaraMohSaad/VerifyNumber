import { IntlProvider } from 'react-intl';
import React from 'react';

export const RTLContext = React.createContext();

export const RTLProvider = ({ children, locale }) => {
  return (
    <RTLContext.Provider value={locale === 'arabic'}>
      <IntlProvider locale={locale}>
        {children}
      </IntlProvider>
    </RTLContext.Provider>
  );
};