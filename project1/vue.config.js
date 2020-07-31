const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolveLoader: {
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules',
      ]
    },
    resolve: {
        alias: {
          '@s1': path.resolve(__dirname, '../shared1'),
          '@s2': path.resolve(__dirname, '../shared2'),
        },
        modules: [
          path.resolve(__dirname, 'node_modules'),
          'node_modules',
        ],
    },
    devtool: 'source-map',
},
}
