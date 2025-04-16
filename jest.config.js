/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  setupFiles: ['jest-localstorage-mock'],
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};