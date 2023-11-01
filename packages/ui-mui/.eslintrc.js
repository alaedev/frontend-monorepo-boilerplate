module.exports = {
  root: true,

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['node_modules', 'dist', 'build', 'coverage/**/*'],
  extends: ['eslint-config-base'],
}
