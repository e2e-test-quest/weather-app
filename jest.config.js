const TS_CONFIG_PATH = './tsconfig.json';
const ROOT_PATH = '<rootDir>/src';

function makeModuleNameMapper(srcPath, tsconfigPath) {
    // Get paths from tsconfig
    const {paths} = require(tsconfigPath).compilerOptions;

    const aliases = {};

    // Iterate over paths and convert them into moduleNameMapper format
    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '/(.*)');
        const path = paths[item][0].replace('/*', '/$1');
        aliases[key] = srcPath + '/' + path;
    });
    return aliases;
}

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  globalSetup: 'jest-preset-angular/global-setup',
  roots: ['<rootDir>/src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@angular|@ngrx|rxjs|@testing-library|@ngxs/store)'
  ],
  moduleNameMapper: makeModuleNameMapper(ROOT_PATH, TS_CONFIG_PATH)
};
