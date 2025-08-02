import * as React from 'react';
import { useMemo } from 'react';
import { createIntl, IntlProvider as ReactIntlProvider } from 'react-intl';

import translationsEn from './sample/translations.json';

export const DEFAULT_LOCALE = 'en-US';

export const resolveMessages = (locale: string) => {
  return translationsEn;
};

const resolveLocale = (locale: string) =>
  locale.startsWith('de') || locale.startsWith('en') || locale.startsWith('es') || locale.startsWith('fr') ? locale : DEFAULT_LOCALE;

export const IntlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const resolvedLocale = 'en-US';
  const messages = useMemo(() => resolveMessages(resolvedLocale), [resolvedLocale]);
  return (
    <ReactIntlProvider key={resolvedLocale} locale={resolvedLocale} messages={messages}>
      {children}
    </ReactIntlProvider>
  );
};

export const getIntl = () => {
  const resolvedLocale = resolveLocale('en-US');
  return createIntl({ locale: resolvedLocale, messages: resolveMessages(resolvedLocale) });
};
