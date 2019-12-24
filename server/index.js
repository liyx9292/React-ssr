// 为了让node支持es6
require('@babel/register')({
  presets: ['@babel/env', '@babel/react']
})
// 支持css
require('css-modules-require-hook')({
  extensions: ['.css'],
  generateScopedName: '[name]__[local]-[hash:base64:8]'
})
require('./server.js')