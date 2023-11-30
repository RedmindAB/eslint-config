# @redmindab/eslint-config

> Redmind's internal eslint configuration.

## 📦 Install packages

`npm i -D @redmindab/eslint-config`

## 🔧 Create config files

create `.eslintrc` in the root of the project with the following content

```json
{
  "extends": ["@redmindab/eslint-config"]
}
```

You can also choose to extend only the react or typescript configuration:

```json
{
  "extends": ["@redmindab/eslint-config/typescript", "@redmindab/eslint-config/react"]
}
```

---

Create a `.prettierrc` in the root of the project with the [following content](https://gist.github.com/Saschamz/7ae57530abeaab1beaa81240558a07c8)

---

## Update all files in src directory

```
npx prettier --write src/**/*.{ts,tsx}
npx eslint --fix src/**/*.{ts,tsx}
```
