import betterStyledComponents from "eslint-plugin-better-styled-components"
import jsxA11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactNative from "eslint-plugin-react-native"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig } from "eslint/config"

export default defineConfig(jsxA11y.flatConfigs.recommended, {
  files: ["**/*.jsx", "**/*.tsx"],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      __DEV__: "readonly",
    },
  },
  plugins: {
    react,
    "react-native": reactNative,
    "react-hooks": reactHooks,
    "better-styled-components": betterStyledComponents,
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "react/jsx-boolean-value": "error",
    "react-native/split-platform-components": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "react-native/no-color-literals": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-raw-text": "off",
    "react/display-name": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/style-prop-object": "off",
    "react/no-unstable-nested-components": [
      "warn",
      {
        allowAsProps: true,
      },
    ],
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],
    "react/state-in-constructor": "off",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "error",
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
    "better-styled-components/sort-declarations-alphabetically": "warn",
  },
})
