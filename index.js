module.exports = {
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
    "comma-dangle": ["error", "never"],
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "keyword-spacing": "error",
    "max-len": ["error", {code: 100, tabWidth: 2}],
    "no-bitwise": "off",
    "no-console": 0,
    "no-restricted-syntax": 0,
    "no-shadow": "off",
    "no-use-before-define": "off",
    "semi": ["error", "always"],
  },
};

