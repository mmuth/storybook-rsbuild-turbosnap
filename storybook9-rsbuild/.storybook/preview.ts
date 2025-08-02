import { Preview } from 'storybook-react-rsbuild';
import { IntlDecorator, SUPPORTED_LOCALES } from '../src/i18n/IntlDecorator';

const preview: Preview = {
  decorators: [IntlDecorator],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en-US',
      toolbar: {
        icon: 'globe',
        items: SUPPORTED_LOCALES.map((l) => ({ value: l, title: l })),
      },
    },
  },
};

export default preview;
