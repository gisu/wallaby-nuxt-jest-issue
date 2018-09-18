const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  moduleNameMapper: {
    '^[@~]/(.*)$': '<rootDir>/$1',
    '~/([a-zA-Z0-9/.\\-_]*)': '<rootDir>/$1'
  },
  verbose: true,
  collectCoverageFrom: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'store/**/*.{js,ts,vue}'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testPathIgnorePatterns: [
    '<rootDir>/tailwind/',
    '<rootDir>/node_modules'
  ],
  transform: {
    '^.+\\.js$': 'babel-7-jest',
    '.*\\.(vue)$': 'jest-vue-preprocessor',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  }
};
