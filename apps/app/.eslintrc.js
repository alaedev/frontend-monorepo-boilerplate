/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['node_modules', '.next', 'dist', 'build', 'coverage'],
  extends: ['plugin:@next/next/recommended', 'eslint-config-base'],
}
