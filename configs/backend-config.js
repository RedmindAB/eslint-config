/**
 * @description This is meant to be imported after the typescript configuration to cancel out certain rules.
 */

import { defineConfig } from "eslint/config"
import typescriptConfig from "./typescript-config.js"

export default defineConfig(typescriptConfig, [
  {
    ignores: ["**/.next/**", "**/dist/**", "**/build/**"],
    files: ["**/*.ts", "**/*.js"],
    rules: {
      "max-lines": "off",
      "max-statements": ["warn", 30],
    },
  },
])
