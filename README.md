# eslint-config-pureprofile

in your package json just add:

```
npm install --save --save-exact husky@4 lint-staged eslint-config-pureprofile prettier
```

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
