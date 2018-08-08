[![npm-version](https://badge.fury.io/js/%40wetransfer%2Feslint-config-wetransfer.svg)](https://www.npmjs.com/package/@wetransfer/eslint-config-wetransfer)
[![CircleCI](https://circleci.com/gh/WeTransfer/eslint-config-wetransfer/tree/master.svg?style=svg)](https://circleci.com/gh/WeTransfer/eslint-config-wetransfer/tree/master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# WeTransfer ESLint Config

This package provides WeTransfer's base `.eslintrc` as an extensible shared config. We also provide some React rules as a separate configuration.
It is eslint@4+-compatible and maintained by the friendly folks at WeTransfer.

## Installation

1. Install this config package and ESLint: `npm install --save-dev eslint @wetransfer/eslint-config-wetransfer`.
2. Add `"extends": "@wetransfer/wetransfer"` to your `.eslintrc`.
3. Add `"extends": "@wetransfer/wetransfer/react"` to your `.eslintrc` if you want to make use of our React specific rules. In that case, please install `eslint-plugin-react` as well:
  * `npm install --save-dev eslint-plugin-react`

## Which rules do we define?

Please take a look to the source code of [index.js](https://github.com/WeTransfer/eslint-config-wetransfer/blob/master/index.js), which lists every ESLint rule provided by this configuration.

## Development

After checking out the repo, run `yarn` to install all dependencies. To run all tests:

```bash
$ npm test
```

## Release process

First, make sure that you have a NPM account at [https://www.npmjs.com/](https://www.npmjs.com/), and you are part of the WeTransfer developer's team. Use `npm login` to store the credentials on the client aka, your computer. Check that your authentication token for `registry.npmjs.org` is part of your `~/.npmrc` file.

We use `semantic-release` to manage release process. Please run `npm run release:dry` to check relevant changes and possible new versions. If you are happy with it, run `npm run release`, it should do the following:

* Verify authentication for registry
* Verify GitHub authentication
* Find latest release and associated git tag
* Find last commits since last release
* Generate release notes
* Create Git tag
* Prepare the package and release it 📦

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/WeTransfer/eslint-config-wetransfer. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting with WeTransfer project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/WeTransfer/eslint-config-wetransfer/blob/master/.github/CODE_OF_CONDUCT.md).
