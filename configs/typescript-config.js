import js from "@eslint/js"
import jest from "eslint-plugin-jest"
import perfectionist from "eslint-plugin-perfectionist"
import unusedImports from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig([
  {
    ignores: ["node_modules", "dist", "build"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true,
      },
      globals: {
        node: "readonly",
        jest: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      jest,
      perfectionist,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "max-params": "off",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/method-signature-style": ["error", "method"],
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "no-implied-eval": "off",
      "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/restrict-plus-operands": ["error"],
      "@typescript-eslint/lines-between-class-members": "off",
      eqeqeq: "error",
      "max-depth": ["error", 3],
      "no-alert": "error",
      "prefer-arrow-callback": "error",
      yoda: "error",
      "max-lines": ["error", 300],
      "max-statements": ["error", 30],
      "no-else-return": "error",
      "no-unreachable": "warn",
      "no-unreachable-loop": "error",
      "arrow-body-style": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "perfectionist/sort-objects": "warn",
      "perfectionist/sort-named-exports": "warn",
      "perfectionist/sort-maps": "warn",
      "perfectionist/sort-array-includes": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "sort-imports": "off",
      "unused-imports/no-unused-imports": "warn",
      "perfectionist/sort-enums": ["warn", { partitionByComment: true }],
      "perfectionist/sort-interfaces": [
        "warn",
        {
          groups: ["special", "multiline"],
          customGroups: {
            special: ["id", "_id"],
          },
        },
      ],
      "perfectionist/sort-object-types": [
        "warn",
        {
          groups: ["special", "multiline"],
          customGroups: {
            special: ["id", "_id"],
          },
        },
      ],
      "perfectionist/sort-jsx-props": "warn",
      "padding-line-between-statements": [
        "warn",
        // * Always blank line before "next"
        {
          blankLine: "always",
          prev: "*",
          next: ["return", "for", "while", "export", "function", "block-like", "throw"],
        },
        // * Always blank line after "prev"
        {
          blankLine: "always",
          prev: ["for", "while", "function", "block-like"],
          next: "*",
        },
        // * Never blank lines between switch cases
        { blankLine: "never", prev: ["case"], next: "*" },
        { blankLine: "never", prev: "*", next: ["case"] },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          groups: ["side-effect", "external", "internal"],
          newlinesBetween: "always",
        },
      ],
    },
  },
])
