import type { UserConfig } from '@commitlint/types'

const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [() => true],
}

module.exports = commitlintConfig
