import { Config } from 'jest'
import nextJest from 'next/jest'

import { jestConfigJsdom } from '../../packages/config-jest'

const createJestConfig = nextJest({
  dir: './',
})

const jestConfig: Config = {
  ...jestConfigJsdom,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testTimeout: 20000,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.tsx'].concat(jestConfigJsdom.setupFilesAfterEnv ?? []),
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
}

module.exports = createJestConfig(jestConfig)
