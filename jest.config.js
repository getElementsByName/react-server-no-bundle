const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    "testRegex": "((\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "rootDir": "./src",
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
}