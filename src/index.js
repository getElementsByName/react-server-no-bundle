const path = require('path')

require('ts-node').register({
    project: path.join(__dirname, '../tsconfig.json'),
})
require('@babel/register')({
    configFile: path.join(__dirname, '../babel.config.js'),
    extensions: [".es6", ".es", ".jsx", ".js", ".mjs", '.ts', '.tsx'],
})


const { runServer } = require('./server.index')
runServer()