const path = require('path');

module.exports = {
  modules: path.resolve('node_modules'),
  source: path.resolve('src'),
  entryJS: path.resolve('src/index.js'),
  templateHTML: path.resolve('src/index.html'),
  output: path.resolve('build'),
};

