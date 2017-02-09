function buildConfig(env) {
  return require(`./webpack.${env}.config`)({ env });
}

module.exports = buildConfig;
