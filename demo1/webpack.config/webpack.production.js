const path = require('path')

module.exports = {
  mode: 'production', // production  development  none
  entry: './demo1/index.js',
  output: {
    path: path.resolve(__dirname, '../production'),
    filename: 'clx.js'
  }
};
