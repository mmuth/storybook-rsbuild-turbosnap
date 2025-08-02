import { Decorator } from 'storybook-react-rsbuild';
import { IntlProvider } from 'react-intl';
import { resolveMessages } from './IntlProvider';

export const IntlDecorator: Decorator = (Story, { globals }) => {
  const locale = globals.locale as string;
  return (
    <IntlProvider locale={locale} messages={resolveMessages(locale)}>
      <Story />
    </IntlProvider>
  );
};

export const SUPPORTED_LOCALES = ['en-US'];
