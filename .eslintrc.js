module.exports = {
  'extends': [
    'react-app',
    'plugin:cypress/recommended',
    'airbnb',
    'plugin:ramda/recommended',
  ],
  'rules': {
    'react/jsx-filename-extension': 'off',
  },
  'plugins': [
    'cypress',
    'ramda',
  ],
  'env': {
    'cypress/globals': true,
  },
};
