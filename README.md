# eslint-config-pureprofile

## what is this?

this is compose config file for (usage of react plugins is autodetected based if a project has react installed in dependencies):

```
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "react-app",
    "react-app/jest",
    "prettier"
  ],
```

some rules were disabled because they did conflict with the way we write code, but not too many, please see index.js for details

## how do i use this?

in your package json just add:

```
npm install --save eslint-config-pureprofile
npm install --save-dev husky@4 lint-staged prettier
```

and add these bits into your package.json:

```
"scripts": {
  "eslint": "eslint --ext=ts,tsx ./src",
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "npm run build && npm run eslint"
  }
},
"lint-staged": {
  "*.{ts,tsx}": [
    "eslint --ext=ts,tsx --fix",
    "prettier --write",
    "git add"
  ],
  "*.{js,jsx,json,css,scss}": [
    "prettier --write",
    "git add"
  ]
},
"eslintConfig": {
  "extends": "pureprofile",
  "parserOptions": { "project": "./tsconfig.json" }
},
"prettier": "eslint-config-pureprofile/prettier-config",
```
