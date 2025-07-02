import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  framework: '@storybook/react-vite', // 👈 Add this
  addons: ['@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
};

export default config;