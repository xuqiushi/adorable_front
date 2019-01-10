 module.exports = {
    "root": true,
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module",
        "allowImportExportEverywhere": false
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:prettier/recommended",
    ],
    "plugins": [
        "standard",
        "promise",
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6":true,
        "jquery":true
    },
    "globals": {
        "Vue": true,
        "AMap": true,
        "tdist": true,
        "EXIF": true,
        "j_body": true,
        "native": true,
        "VueRouter": true,
        "pocketPost": true,
        "aliCnCityList": true,
    },
    "rules": {
        // prettier规则
        "no-console": 0,
        "no-useless-escape": 0,
        "no-multiple-empty-lines": [
          2,
          {
            "max": 3
          }
        ],
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "semi": false,
            "trailingComma": "none",
            "bracketSpacing": true,
            "jsxBracketSameLine": true,
            "insertPragma": true,
            "requirePragma": false
          }
        ],
        // eslint规则
        "no-unused-vars": [2, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-debugger": [2],
        "no-unreachable": [2],
        "no-extra-semi": [2],
    }
};