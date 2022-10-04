module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
  	filename: 'numjs.js',
  	library: 'numjs'
  },
  optimization: {
    minimize: false
  }
};
