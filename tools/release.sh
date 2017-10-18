#!/usr/bin/env bash

set -e

BRANCH_NAME="$(git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')"

if [[ $BRANCH_NAME = "master" ]]
then
  node_modules/.bin/eslint-ci-release
  node_modules/.bin/eslint-gh-release
else
  echo "Nothing to release on a branch 👋"
fi
