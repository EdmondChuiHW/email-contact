module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  setupFiles: [
    '<rootDir>/config/polyfills.js',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@material-ui/core/es).+(js|jsx)$',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  modulePaths: [
    'src',
  ],
};
