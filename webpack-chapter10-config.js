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
    },

    // we need to add some rules (within module.rules) which can modify how the module is created. The rules include pointing use.loader element to babel-loader as shown below. The rules.test contains a regular expression which has to be tested. Here, what is indicated is that the rules should apply to .js files. We have also indicated using rules.exclude that we don’t want the rules to apply to node_modules directory

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

/*
Finally, we need to ensure that we can run the webpack script from command line by modifying the "script" section of our package.json file to include "build": "webpack" like that shown below. 

"scripts": { 
 "test": "echo \"Error: no test specified\" && exit 1", 
 "build": "webpack" 
 },

*/