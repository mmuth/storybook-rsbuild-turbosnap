import {StorybookConfig} from 'storybook-react-rsbuild';
import {pluginReact} from '@rsbuild/plugin-react';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [],
    framework: 'storybook-react-rsbuild',
    rsbuildFinal: (config) => {
        return {
            ...config,
            plugins: [pluginReact()],
        };
    },
    staticDirs: ['../public'],
};

export default config;
