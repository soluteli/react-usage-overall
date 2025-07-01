export const framework = {
  name: "@storybook/react-webpack5",
  options: {},
};

export const docs = {
  autodocs: true,
};
export const addons = ["@chromatic-com/storybook"];

export const stories = [
  "../stories/**/*.mdx",
  "../stories/**/*.story.@(js|jsx|mjs|ts|tsx)",
];

export const webpackFinal = async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          // add plugins if needed
        },
      },
    });

    // Add other loaders here (e.g. for less, css) if needed

    return config;
}
