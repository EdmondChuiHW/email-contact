module.exports = {
  "extends": [
    "react-app",
    "plugin:cypress/recommended",
  ],
  "rules": {
    // More custom rules here
  },
  "plugins": [
    "cypress",
  ],
  "env": {
    "cypress/globals": true,
  },
};
