// Local test configuration for development
import prettier from "eslint-config-prettier"
import reactConfig from "./configs/react-config.js"
import typescriptConfig from "./configs/typescript-config.js"

export default [
  {
    ignores: ["node_modules/**"],
  },
  ...typescriptConfig,
  ...reactConfig,
  prettier,
]
