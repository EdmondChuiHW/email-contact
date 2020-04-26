module.exports = {
  'extends': [
    'react-app',
    'plugin:cypress/recommended',
    'airbnb',
    'plugin:ramda/recommended',
  ],
  'rules': {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': ['error', { 'functions': false, 'classes': false }],
    'consistent-return': 'off',
    'no-return-assign': 0,
    'react/prop-types': 'off',
  },
  'plugins': [
    'cypress',
    'ramda',
  ],
  'env': {
    'cypress/globals': true,
  },
};
