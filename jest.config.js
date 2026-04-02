module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(png|jpg|gif|woff|woff2|obj|ttf|mp4|ogg|svg|eot)$': '<rootDir>/src/__mocks__/fileMock.js',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
};
