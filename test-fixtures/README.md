# Testing ESLint Config Locally

This project includes test fixtures to verify the ESLint configuration works correctly.

## Available Scripts

### Lint Test Fixtures

Run ESLint against test files to verify configuration:

```bash
npm run lint:test-fixtures
```

This will lint the test files in `test-fixtures/` and show any linting issues.

### Fix Test Fixtures

Automatically fix linting issues (where possible):

```bash
npm run lint:fix
```

### Lint All Files

Run ESLint on the entire project (excluding node_modules):

```bash
npm run lint
```

## Test Fixtures Structure

The `test-fixtures/` directory contains example files to test the configuration:

- **typescript.ts** - Tests TypeScript rules
- **react.tsx** - Tests React and JSX rules
- **tsconfig.json** - TypeScript configuration for type-aware linting

## How to Test Changes

1. Make changes to any config file (index.js, typescript.js, react.js, backend.js)
2. Run `npm run lint:test-fixtures` to see if the configuration works
3. Update test fixtures as needed to demonstrate new rules or behaviors

## Notes

- The `eslint.config.js` file in the root is used for local development testing
- It's not included in the npm package distribution
- Test fixtures help ensure the config works correctly before publishing
