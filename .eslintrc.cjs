/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, amd: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Add TypeScript-specific linting rules
    "plugin:prettier/recommended" // Add this to integrate Prettier
  ],
  parser: "@typescript-eslint/parser", // Specify the ESLint parser for TypeScript
  parserOptions: { 
    ecmaVersion: "latest", 
    sourceType: "module", 
    ecmaFeatures: {
      jsx: true, // Enable JSX since you're using React
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@typescript-eslint"], // Add TypeScript plugin
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off", // PropTypes are often not used in TypeScript
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Prevent TypeScript-specific linting errors for unused variables
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return type rule for functions
    // You can add more TypeScript-specific rules based on your project's needs
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Apply TypeScript-specific rules only to TypeScript files
      rules: {
        // Here you can disable or enable additional TypeScript-specific rules for `.ts` and `.tsx` files.
      },
    },
  ],
};
