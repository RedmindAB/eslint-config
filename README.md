# eslint-config

## Install packages
### For front-end
run `eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @redmindab/eslint-config`

### For back-end
run `eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser @redmindab/eslint-config`

## Create config files
create `.eslintrc.json` in the root of the project with the following content
```
{
  "extends": ["@redmindab/eslint-config"]
}

```

create `.prettierrc` in the root of the project with the following content
```
{
  "singleQuote": true,
  "semi": false
}

```
