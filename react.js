module.exports = {
  "plugins": ["react"],
  "extends": {
    "plugin:react/recommended"
  },
  "rules": {
    "react/no-find-dom-node": "error",
    "react/no-danger": ["warn"],
    "react/no-deprecated": ["warn"],
    "react/no-string-refs": ["warn"],
    "react/no-unescaped-entities": ["warn"],
    "react/jsx-indent": [2, 2]
  }
}