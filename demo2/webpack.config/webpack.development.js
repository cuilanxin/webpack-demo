const path = require('path')

module.exports = {
  mode: 'development', // production  development  none
  entry: './demo2/index.js',
  output: {
    path: path.resolve(__dirname, '../development'),
    filename: 'clx.js'
  }
};
