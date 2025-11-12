import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    ".git/**",
  ]),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      // TypeScript rules
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",

      // General rules
      "no-console": "off",
    },
  },
]);

export default eslintConfig;
