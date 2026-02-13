import { defineConfig } from "eslint/config"
import reactConfig from "./react-config.js"
import typescriptConfig from "./typescript-config.js"

export default defineConfig(typescriptConfig, reactConfig)
