module.exports = {
  rules: {
    // 2 spaces indentation for jsx
    'react/jsx-indent': ['error', 2],

    // Don't create new functions on every rerender
    // Error in next major update
    'react/jsx-no-bind': 'warn',

    // Setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack
    'react/no-danger': 'warn',

    // Because we want to upgrade to new versions
    'react/no-deprecated': 'error',

    // Eventually findDomNode will be deprecated and it's a performance killer.
    'react/no-find-dom-node': 'error',

    // Use ref callbacks instead of string refs
    'react/no-string-refs': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'warn',

    // Stateless functional components are simpler than class based components
    // Error in next major update
    'react/prefer-stateless-function': 'warn',

    // Components without children should be self-closing to avoid unnecessary extra closing tag.
    'react/self-closing-comp': 'error'
  }
};
