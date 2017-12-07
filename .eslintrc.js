module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "settings": { 
        "import/resolver": "webpack" 
    },
    "rules": {
        "indent": [
            "warn",
            4 
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
