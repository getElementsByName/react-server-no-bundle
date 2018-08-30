const { defaults } = require('jest-config');
const babelConfig = require('./babel.config')
// const path = require('path')

module.exports = {
    verbose: true,
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    "globals": {
        "ts-jest": {
            "babelConfig": babelConfig
        },
    },
    "testRegex": "((\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "rootDir": "./src",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx', 'ts', 'tsx'],
}