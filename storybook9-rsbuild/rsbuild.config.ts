import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {RsdoctorRspackPlugin} from '@rsdoctor/rspack-plugin';
import {pluginModuleFederation} from '@module-federation/rsbuild-plugin';

const devServerPort = 8780;
const fastRefreshAndHmrEnabled = true; // Disable this to force a browser reload on changes, this is useful if your frontend does not support HMR/fast refresh

export default defineConfig({
    plugins: [
        pluginReact({
            enableProfiler: process.env.REACT_PROFILER === 'true',
            splitChunks: {react: false, router: false},
            fastRefresh: fastRefreshAndHmrEnabled,
        }),
        pluginModuleFederation({
            name: 'repro',
            dts: false,
            runtimePlugins: [],
            experiments: {externalRuntime: true},
            exposes: {
                './test': './src/components/ExamplePage/ExamplePage.tsx',
            },
            shareStrategy: 'loaded-first',
            shared: [],
        }),
    ],
    performance: {bundleAnalyze: process.env.NODE_ENV === 'production' ? {analyzerMode: 'json', reportFilename: 'chunk-stats.json'} : undefined},
    tools: {
        rspack(config, {appendPlugins}) {
            if (process.env.RSDOCTOR) {
                appendPlugins(new RsdoctorRspackPlugin({}));
            }
        },
    },
    html: {template: './public/index.html'},
    dev: {
        assetPrefix: 'auto',
        hmr: fastRefreshAndHmrEnabled,
        client: {host: 'local.dev', port: devServerPort},
    },
    server: {
        port: devServerPort,
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        https: {},
    },
    output: {
        assetPrefix: 'auto',
        sourceMap: {js: 'source-map'},
        distPath: {root: 'build'},
    },
});
