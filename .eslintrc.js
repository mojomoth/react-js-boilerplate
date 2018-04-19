module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint-config-airbnb"
    ],
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "sourceType": "module",
            "allowImportExportEverywhere": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "settings": {
        "import/resolver": "webpack"
    },
    "rules": {
        "indent": [
            "warn",
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/prefer-stateless-function": 0
    }
};
