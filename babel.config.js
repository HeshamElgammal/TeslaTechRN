module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
          theme: ['./src/theme'],
          screens: ['./src/screens'],
          navigation: ['./src/navigation'],
          components: ['./src/components'],
          store: './src/redux',
          assets: ['./src/assets'],
          utils: ['./src/utils'],
          hooks:['./src/hooks']
        },
      },
    ],
    'jest-hoist',
  ],
};
