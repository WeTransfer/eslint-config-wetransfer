[![npm-version](https://badge.fury.io/js/%40wetransfer%2Feslint-config-wetransfer.svg)](https://badge.fury.io/js/%40wetransfer%2Feslint-config-wetransfer.svg)
[![Build Status](https://travis-ci.org/WeTransfer/eslint-config-wetransfer.svg?branch=master)](https://travis-ci.com/WeTransfer/eslint-config-wetransfer)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# WeTransfer ESLint Config
This package provides WeTransfer's base `.eslintrc` as an extensible shared config.
It is eslint@4+-compatible and maintained by the friendly folks at WeTransfer. 

## Installation 
1. Install this config package and ESLint: `$ npm install --save-dev eslint @wetransfer/eslint-config-wetransfer`
2. add `"extends": "wetransfer"` to your `.eslintrc`

## Which rules do we define?
Please take a look to the source code of [index.js](https://github.com/WeTransfer/eslint-config-wetransfer/blob/master/index.js), which lists every ESLint rule provided by this configuration.
