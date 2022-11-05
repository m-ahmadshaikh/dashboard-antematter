module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  return config;
};
