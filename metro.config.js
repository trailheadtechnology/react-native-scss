const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

module.exports = (async () => {
    const defaultConfig = getDefaultConfig(__dirname);

    const customConfig = {
      transformer: {
        babelTransformerPath: require.resolve('react-native-sass-transformer'),
      },
      resolver: {
        sourceExts: [...defaultConfig.resolver.sourceExts, 'scss', 'sass'],
      },
    };

    return mergeConfig(defaultConfig, customConfig);
})();
