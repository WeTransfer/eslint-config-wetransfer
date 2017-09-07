module.exports = {
  "plugins": ["import"],
  "extends": [
    "plugin:import/errors"
  ],
  "rules": {
    // Indendation and line-breaks
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      },
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],

    // Be consistent when using quotes, and when using them, use single quotes.
    "quote-props": [
      "error",
      "consistent"
    ],
    "quotes": [
      "error",
      "single"
    ],

    // Always end a line with a semicolon
    "semi": [
      "error",
      "always"
    ],

    // Function and keyword styling
    "space-before-function-paren": ["error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "no-confusing-arrow": "error",
    "arrow-spacing": "error",
    "keyword-spacing": "error",
    "arrow-parens": "error",
    "no-param-reassign": [ "off", { "props": true } ],

    // Use type-safe equality operators
    "eqeqeq": [
      "error",
      "always"
    ],

    // Prevent typing useless code
    "no-unused-vars": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-multi-spaces": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true
      }
    ],
    "no-use-before-define": "error",
    "no-useless-constructor": "error",
    "prefer-const": "error",
    "prefer-spread": "error",

    // Other styling rules
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-alert": "error",
    "no-useless-escape": "off",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "yoda": "error",
    "curly": [ "error", "all" ],
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-return-assign": "error",
    "vars-on-top": "error",

    // Imports
    "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
  }
}