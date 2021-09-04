module.exports = {
  verbose: true,
  moduleDirectories: ['src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@Database/(.*)': '<rootDir>/src/database/$1',
    '@Enums/(.*)': '<rootDir>/src/enums/$1',
    '@Helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@Http/(.*)': '<rootDir>/src/http/$1',
    '@Pages/(.*)': '<rootDir>/src/pages/$1',
    '@Styles/(.*)': '<rootDir>/src/styles/$1',
    '@Utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/helpers/fileTransformer.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/helpers/setupTests.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  testMatch: ['<rootDir>/src/**/(*.)+(spec|test).js?(x)'],
  testEnvironment: 'jsdom',
};
