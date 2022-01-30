const path = require('path')

module.exports = {
  mode: 'none', // production  development  none
  entry: './demo1/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clx.js'
  }
};
