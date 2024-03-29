# @redmindab/eslint-config

> [Redmind](https://www.redmind.se/)'s internal TypeScript eslint configuration.

## 📦 Install package and peer dependencies

```bash
npm i -D @redmindab/eslint-config && npx install-peerdeps -D @redmindab/eslint-config
```

## 🔧 Create config files

create `.eslintrc` in the root of the project with the following content

```json
{
  "extends": ["@redmindab/eslint-config"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

You can also choose to extend only specific configurations:

```json
{
  "extends": [
    "@redmindab/eslint-config/typescript",
    "@redmindab/eslint-config/react",
    "@redmindab/eslint-config/backend"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## 💅 Stylistic formatting w. Prettier

Create a `.prettierrc` in the root of the project with the [following content](https://gist.github.com/Saschamz/7ae57530abeaab1beaa81240558a07c8)

## Update all files in src directory

```bash
npx prettier --write src/**/*.{ts,tsx}
npx eslint --fix src/**/*.{ts,tsx}
```
