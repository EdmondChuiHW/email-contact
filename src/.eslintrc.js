module.exports = {
  'extends': [
    'react-app',
    'plugin:cypress/recommended',
    'airbnb',
  ],
  'rules': {
    'react/jsx-filename-extension': 'off',
  },
  'plugins': [
    'cypress',
  ],
  'env': {
    'cypress/globals': true,
  },
};
