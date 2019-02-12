module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.vue$/,
    loader: "vue-loader"
  });
  return defaultConfig;
};
