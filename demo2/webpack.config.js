const path = require('path')

module.exports = {
  mode: 'none', // production  development  none
  entry: ['./demo2/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'clx.js'
  }
};
