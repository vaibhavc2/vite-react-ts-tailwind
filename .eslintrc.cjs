module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "import", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  },
  settings: { react: { version: "18.2" } },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "react/prop-types": 0,
    indent: ["error", 2],
    "linebreak-style": 1,
    quotes: ["error", "double"],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "no-multiple-empty-lines": [2, { max: 3, maxEOF: 1 }]
  }
};
