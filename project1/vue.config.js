const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
        alias: {
          '@s1': path.resolve(__dirname, '../shared1'),
          '@s2': path.resolve(__dirname, '../shared2'),
          '@s3': path.resolve(__dirname, 'shared3'),
        },
    },
    devtool: 'source-map',
},
}
