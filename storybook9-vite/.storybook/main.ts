import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
};

export default config;
