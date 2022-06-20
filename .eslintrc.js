/* eslint-env node */

/** @type {import('eslint').Linter} */
const config = {
  extends: ["canonical", "canonical/prettier"],
  overrides: [
    {
      extends: ["canonical/typescript", "canonical/prettier"],
      files: "*.ts",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    {
      extends: ["canonical/json", "canonical/prettier"],
      files: "*.json",
    },
    {
      extends: ["canonical/yaml", "canonical/prettier"],
      files: "*.yaml",
    },
    {
      files: "{**/{index,_app}.tsx,.eslintrc.js,next.config.js}",
      rules: {
        "canonical/filename-match-exported": "off",
      },
    },
  ],
  root: true,
  rules: {
    "canonical/destructuring-property-newline": "off",
    "canonical/import-specifier-newline": "off",
    "import/extensions": [
      "error",
      {
        css: "always",
        js: "never",
        json: "always",
        jsx: "never",
        mjs: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        warnOnUnassignedImports: false,
      },
    ],
    "jsdoc/valid-types": "off",
  },
};

module.exports = config;
