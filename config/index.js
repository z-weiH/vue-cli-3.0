
const base = require('./webpack.base');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
module.exports = {
  ...base,
  ...(function() {
    return process.env.NODE_ENV === 'production' ? prod : dev
  })(),
}