
const base = require('./webpack.base');
const dev = require('./webpack.dev');
const prod = require('./webpack.dev');
console.log();
module.exports = {
  ...base,
  ...(() => {
    return process.env.NODE_ENV === 'production' ? prod : dev
  })(),
}