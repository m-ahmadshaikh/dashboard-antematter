const rewireEslint = require('react-app-rewired-eslint');

module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  return config;
};
