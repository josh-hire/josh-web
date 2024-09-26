module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '^Assets/(.*)$': '<rootDir>/public/assets/$1',
    '^Components/(.*)$': '<rootDir>/src/components/$1',
    '^Configs': '<rootDir>/src/configs/index',
    '^Elements/(.*)$': '<rootDir>/src/components/elements/$1',
    '^Styles/(.*)$': '<rootDir>/src/styles/$1',
    '^Configs/(.*)$': '<rootDir>/src/configs/$1',
    '^Constants/(.*)$': '<rootDir>/src/constants/$1',
    '^Contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^Hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^Modules/(.*)$': '<rootDir>/src/modules/$1',
    '^Services/(.*)$': '<rootDir>/src/services/$1',
    '^Utils/(.*)$': '<rootDir>/src/utils/$1',
    '^Layout/(.*)$': '<rootDir>/src/modules/Layout/$1',
    '^@fontsource/(.*)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['raf/polyfill'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx, ts, tsx}',
    '!src/.next/$1*/$1.{js,jsx, ts, tsx}',
    '!src/public/$1*/$1.{js,jsx, ts, tsx}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
};
