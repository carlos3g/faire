const importOptions = {
  paths: [
    {
      rootPathSuffix: './src',
    },
    {
      rootPathSuffix: './src/navigation',
      rootPathPrefix: '@navigation',
    },
    {
      rootPathSuffix: './src/components',
      rootPathPrefix: '@components',
    },
    {
      rootPathSuffix: './src/screens',
      rootPathPrefix: '@screens',
    },
    {
      rootPathSuffix: './src/services',
      rootPathPrefix: '@services',
    },
    {
      rootPathSuffix: './src/styles',
      rootPathPrefix: '@styles',
    },
    {
      rootPathSuffix: './src/types.ts',
      rootPathPrefix: '@types',
    },
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', importOptions]],
  };
};
