module.exports = (wallaby) => {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  const compiler = wallaby.compilers.babel({ presets: [['@vue/app', { modules: 'commonjs' }]] });

  return {
    files: [
      'jest.config.js',
      'package.json',
      'components/**',
      'assets/**',
      '!components/**/*.spec.js'
    ],

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
      jestConfig.transform = {'.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'};
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',

    debug: true
  };
};
