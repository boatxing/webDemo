module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true
    },
    "globals": {
        "var1": true,
        "var2": false
    },
    "extends": [
        "./rules/es6.js",
    ],
    "rules": {
        "semi": 2,
        "no-console": "warn"
    }
}
