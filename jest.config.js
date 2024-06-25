module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']

  };
  