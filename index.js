/* global module */
/* eslint-env: node */

const path = require('path');

function logError(msg) {
  console.error(`[eslint-config-pureprofile] ${msg}`);
}

const cwd = path.join(process.cwd(), 'node_modules');

function getModuleVersion(name, warnIfNotFound) {
  try {
    const packageJson = require(path.join(name, 'package.json'));
    return packageJson.version;
  } catch (err) {
    // lets try to look using cwd again
  }
  try {
    const packageJson = require(path.join(cwd, name, 'package.json'));
    return packageJson.version;
  } catch (err) {
    if (warnIfNotFound) {
      logError(`not able to load ${name}: ${err}`);
    }
  }
  return null;
}

const hasTypescript = getModuleVersion('typescript', true);
const hasReact = getModuleVersion('react');
const hasJest = getModuleVersion('jest');

const eslintConfig = {
  extends: [
    'eslint:recommended'
  ]
};

if (hasTypescript) {
  getModuleVersion('@typescript-eslint/parser', true);
  getModuleVersion('@typescript-eslint/eslint-plugin', true);

  eslintConfig.parser = '@typescript-eslint/parser';
  eslintConfig.parserOptions = eslintConfig.parserOptions || {};
  eslintConfig.parserOptions.sourceType = 'module';

  eslintConfig.plugins = eslintConfig.plugins || [];
  eslintConfig.plugins.push(
    '@typescript-eslint'
  );

  eslintConfig.extends.push(
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  );
}

if (hasReact) {
  eslintConfig.extends.push("airbnb");
  eslintConfig.extends.push("airbnb/hooks");
} else {
  eslintConfig.extends.push("airbnb-base");
}

if (hasTypescript) {
  if (hasReact) {
    eslintConfig.extends.push("airbnb-typescript");
  } else {
    eslintConfig.extends.push("airbnb-typescript/base");
  }
}

if (hasReact) {
  eslintConfig.extends.push("react-app");
}

if (hasReact && hasJest) {
  eslintConfig.extends.push("react-app/jest");
}

if (hasJest) {
  eslintConfig.plugins = eslintConfig.plugins || [];
  eslintConfig.plugins.push('jest');
  eslintConfig.extends.push("plugin:jest/recommended");
}

// we assume all projects use prettier as they should
eslintConfig.extends.push("prettier");

// disable some recommended rules
eslintConfig.rules = {
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/lines-between-class-members": "off",
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/restrict-template-expressions": "off",
  "@typescript-eslint/unbound-method": "off",
  "class-methods-use-this": "off",
  "consistent-return": "off",
  "default-param-last": "off",
  "func-names": "off",
  "global-require": "off",
  "import/extensions": "off",
  "import/no-relative-packages": "off",
  "import/prefer-default-export": "off",
  "no-await-in-loop": "off",
  "no-continue": "off",
  "no-plusplus": "off",
  "no-promise-executor-return": "off",
  "no-restricted-syntax": "off",
  "no-underscore-dangle": "off",
  "no-void": "off",
  "prefer-arrow-callback": "off",
};

if (hasReact) {
  eslintConfig.rules = Object.assign(eslintConfig.rules, {
    "@typescript-eslint/no-var-requires": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off",
  });
}

// alter some rule behaviour
eslintConfig.rules = Object.assign(eslintConfig.rules, {
  "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
  "no-param-reassign": ["warn", { "props": false }],
  "prefer-const": ["warn", {"destructuring": "all"}],
  "prefer-destructuring": ["warn", { "VariableDeclarator": { "array": false, "object": true }, "AssignmentExpression": { "array": false, "object": false } }, { "enforceForRenamedProperties": false }],
});

// add some stylistic issues
eslintConfig.rules = Object.assign(eslintConfig.rules, {
  "object-curly-spacing": ["warn", "always"],
  "template-curly-spacing": ["warn", "never"],
  "template-tag-spacing": ["warn", "never"],
});

module.exports = eslintConfig;
