module.exports = {
  env: {
    node: true,
    commonjs: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "./typescript",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  plugins: [
    "react",
    "react-native",
    "react-hooks",
    "@shopify",
    "better-styled-components",
    "react-refresh",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-refresh/only-export-components": [
      1,
      {
        allowConstantExport: true,
      },
    ],
    "react/jsx-boolean-value": 2,
    "@shopify/jsx-no-hardcoded-content": [
      1,
      {
        checkProps: ["title", "body", "text", "label"],
      },
    ],
    "react-native/split-platform-components": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "react-native/no-color-literals": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-raw-text": 0,
    "react/display-name": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/style-prop-object": 0,
    "react/no-unstable-nested-components": [
      "warn",
      {
        allowAsProps: true,
      },
    ],
    "react/require-default-props": 0,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],
    "react/state-in-constructor": 0,
    "react/jsx-no-useless-fragment": 1,
    "react/jsx-pascal-case": 2,
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "parens",
        logical: "parens",
        prop: "ignore",
      },
    ],
    "better-styled-components/sort-declarations-alphabetically": 1,
  },
  globals: {
    __DEV__: true,
  },
}
