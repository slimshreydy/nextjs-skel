// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-secrets", "unicorn", "promise"],
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
  ],
  rules: {
    "no-secrets/no-secrets": "error",
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-ternary": ["warn", "only-single-line"],
    "unicorn/filename-case": "off",
    "unicorn/catch-error-name": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
