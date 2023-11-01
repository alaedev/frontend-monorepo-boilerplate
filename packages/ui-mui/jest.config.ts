import { Config } from 'jest'

import { jestConfigJsdom } from '../config-jest'

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = jestConfig
