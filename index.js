module.exports = {
  'rules': {
    // Two spaces indentation
    'indent': [
      'error',
      2,
      {
        // Indentation level for case clauses in switch statements
        'SwitchCase': 1
      }
    ],

    // Unix style line breaks
    'linebreak-style': [
      'error',
      'unix'
    ],

    // Be consistent when using quotes on property names
    'quote-props': [
      'error',
      'consistent'
    ],

    // Use single quotes
    'quotes': [
      'error',
      'single'
    ],

    // Always end a line with a semicolon
    'semi': [
      'error',
      'always'
    ],

    // Spaces between functions and parenthesis
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],

    // Function declaration styles
    'func-style': [
      'error',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],

    // Confusion with comparisons and arrow functions
    'no-confusing-arrow': 'error',

    // Spaces for arrow functions
    'arrow-spacing': 'error',

    // Spaces for keywords
    'keyword-spacing': 'error',

    // Arrow function arguments parenthesis
    'arrow-parens': 'error',

    // Disallow reassignment of function parameters
    'no-param-reassign': [
      'off',
      {
        'props': true
      }
    ],

    // Use type-safe equality operators.
    'eqeqeq': [
      'error',
      'always'
    ],

    // Prevent typing useless code
    'no-unused-vars': 'error',

    // Unnecessary return in else block
    'no-else-return': 'error',

    // Prevent empty functions
    'no-empty-function': 'error',

    // Prevent unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Poor lonely if
    'no-lonely-if': 'error',

    // Disallow multiple spaces
    'no-multi-spaces': 'error',

    // Disallow expressions with no effect
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true
      }
    ],

    // Disallow early use of variables and functions
    'no-use-before-define': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // Suggest using const
    'prefer-const': 'error',

    // Use spread operator over `.apply()`
    'prefer-spread': 'error',

    // Consistent brace style for blocks.
    'brace-style': 'error',

    // Disallow trailing commas
    'comma-dangle': [
      'error',
      'never'
    ],

    // Disallow Use of Alert
    'no-alert': 'error',

    // Allow usesless espaces
    'no-useless-escape': 'off',

    // No explanation needed.
    'no-trailing-spaces': 'error',

    // Only one empty line please
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1,
        'maxBOF': 0
      }
    ],

    // No yoda conditions. I think we want the opposite.
    'yoda': 'error',

    // Require curly braces
    'curly': [ 'error', 'all' ],

    // Disallow functions in loops
    'no-loop-func': 'error',

    // Disallow multiline strings
    'no-multi-str': 'error',

    // Disallow assignment in return statement
    'no-return-assign': 'error',

    // Require variable declarations to be at the top of their scope
    'vars-on-top': 'error'
  }
};
