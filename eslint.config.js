import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import stylisticJs from "@stylistic/eslint-plugin-js";
import importX from "eslint-plugin-import-x";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,

  {
    plugins: {
      "@stylistic/js": stylisticJs,
      "import-x": importX
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: ["warn", "always"],
      "comma-dangle": ["warn", "never"],
      "@stylistic/js/comma-dangle": ["warn", "never"],
      "jsx-quotes": ["warn", "prefer-double"],
      "no-console": "warn",
      "react/display-name": "off",
      "react/prop-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "import-x/order": [
        "warn",
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type"
          ]
        }
      ]
    }
  }
];
