# eslint-config-near

This library is an ESlint configuration for NEAR projects.

## Installation

To install this configuration run the following command:

```sh
npm install -D eslint-config-near
```

## Usage

When configuring ESlint to use this configuration add the following to your config file:

`.eslinrc.cjs`

```javascript
/* eslint-env node */

module.exports = {
  extends: ["near"],
};
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
