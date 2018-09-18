module.exports = (wallaby) => {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  const compiler = wallaby.compilers.babel({ presets: [['@vue/app', { modules: 'commonjs' }]] });

  const wallabyWebpack = require('wallaby-webpack');
  const webpack = require('webpack');
  const wallabyPostprocessor = wallabyWebpack({
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, 'node-noop')
    ]
  });

  return {
    files: ['jest.config.js', 'package.json', '!**/*.spec.js'],

    tests: ['__tests__/**/*.spec.js', 'components/**/*.spec.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': compiler,
      '**/*.vue': require('wallaby-vue-compiler')(compiler)
    },

    preprocessors: {
      '**/*.vue': (file) => require('vue-jest').process(file.content, file.path)
    },

    setup: function(wallaby) {
      const jestConfig = require('./package').jest || require('./jest.config');
      jestConfig.transform = {};
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',

    debug: true
  };
};
