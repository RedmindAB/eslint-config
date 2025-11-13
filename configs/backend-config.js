/**
 * @description This is meant to be imported after the typescript configuration to cancel out certain rules.
 */

import { defineConfig } from "eslint/config"
import typescriptConfig from "./typescript-config"

export default defineConfig(typescriptConfig, [
  {
    files: ["**/*.ts", "**/*.js"],
    rules: {
      "max-lines": "off",
      "max-statements": ["warn", 30],
    },
  },
])
