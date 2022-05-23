// webpack-cli is for tools used to run Webpack from the command line, babel-loader contains Webpack’s library for working with Babel, @babel/core will load Babel core libraries and @babel/preset-env will load the env preset which enables ES6+ transformations, babel-polyfill is required to avoid any Regeneration runtime error which may happen during compilation of some features like async/await.

const path = require('path'); //we require a module named path in this file

module.exports = {
    entry: ["babel-polyfill",'./src/chapter10/index.js'],

    // This will also work for entry 👇🏼
    /*
    entry: {
        app: ["babel-polyfill","./src/chapter10/index.js"]
    },
    */

    mode: 'development', //advised to use 'production' here for more compact builds for production deployments
    output: { //The output.filename indicates that the built file will be named main.js and output.path shows that the path dist/chapter10/js needs to be resolved because the main.js file will be placed there
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/chapter10/js')
    }
};