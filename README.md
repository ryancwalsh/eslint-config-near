# eslint-config-near

This library is an ESlint configuration for NEAR projects.

## Installation

To install this configuration run the following command:

```sh
npm install -D eslint-config-near
```
or
```sh
yarn add -D eslint-config-near
```

## Usage

When configuring ESlint to use this configuration add the following to your config file:

`.eslintrc.cjs`

```javascript
/* eslint-env node */

module.exports = {
  extends: ["near"],
};
```

You might also want to create something like `.vscode/settings.json`:

```JSON
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.workingDirectories": ["./server", "./src", "./shared"]
}
```

## See also

- [near-prettier-config](https://github.com/NEARFoundation/near-prettier-config) - for configuring prettier

## Inspiration

This config is based on the [eslint-config-canonical](https://github.com/gajus/eslint-config-canonical) with some minor changes and setup for different filetypes.

## Building

To build the project just run the build script like:

```sh
npm run build
```

## Publishing

There is no need for manual publishing as this process is done in CI by [semantic-release](https://github.com/semantic-release/semantic-release).
