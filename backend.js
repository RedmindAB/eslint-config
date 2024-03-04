/**
 * @description This is meant to be imported after the typescript configuration to cancel out certain rules.
 */
module.exports = {
  env: {
    node: true,
    commonjs: true,
    "jest/globals": true,
  },
  rules: {
    "max-lines": 0,
    "max-statements": [1, 30],
  },
}
