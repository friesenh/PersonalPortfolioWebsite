module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "babelOptions": {
            "configFile": "../babel.config.json"
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
