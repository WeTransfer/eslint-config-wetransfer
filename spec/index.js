const assert = require('assert');
const eslint = require('eslint');
const config = require('../');

// The source files to test.
const repoFiles = [
  'index.js',
  'react.js',
  'spec/index.js'
];

// esLint options
const eslintOpts = {
  useEslintrc: false,
  envs: ['node', 'es6'],
  parserOptions: { ecmaVersion: 2017 },
  rules: config.rules
};

// Run linter
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);

// Check for errors and warnings
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
