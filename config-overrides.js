const path = require('path')

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias['@'] = path.resolve(__dirname,'./src')
  config.resolve.alias['@c'] = path.resolve(__dirname,'./src/components')
  return config;
}