/* global module */
/* eslint-env: node */

const fs = require('fs');
const path = require('path');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
const eslintConfig = {
  env: {
    es6: true,
    node: true
  },
  rules: {
    // possible errors
    'for-direction': ERROR,
    'getter-return': ERROR,
    'no-await-in-loop': OFF,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': ERROR,
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': WARN,
    'no-extra-parens': OFF,
    'no-extra-semi': WARN,
    'no-func-assign': ERROR,
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-obj-calls': ERROR,
    'no-prototype-builtins': OFF,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': OFF,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'use-isnan': ERROR,
    'valid-jsdoc': OFF,
    'valid-typeof': ERROR,
    // best practices
    'accessor-pairs': ERROR,
    'array-callback-return': OFF,
    'block-scoped-var': ERROR,
    'class-methods-use-this': OFF, // doesn't really work well in too many cases
    'complexity': OFF,
    'consistent-return': OFF,
    'curly': ['error', 'all'],
    'default-case': ERROR,
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowPattern: '_' }],
    'eqeqeq': ['error', 'allow-null'],
    'guard-for-in': ERROR,
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': OFF,
    'no-div-regex': OFF,
    'no-else-return': ['error', {allowElseIf: false}],
    'no-empty-function': OFF,
    'no-empty-pattern': ERROR,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ['error', { boolean: false }],
    'no-implicit-globals': ERROR,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-iterator': ERROR,
    'no-labels': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-magic-numbers': OFF,
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal': ERROR,
    'no-octal-escape': ERROR,
    'no-param-reassign': ERROR,
    'no-proto': ERROR,
    'no-redeclare': ERROR,
    'no-return-assign': OFF,
    'no-return-await': OFF,
    'no-script-url': ERROR,
    'no-self-assign': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-labels': ERROR,
    'no-useless-call': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-escape': WARN,
    'no-useless-return': ERROR,
    'no-void': ERROR,
    'no-warning-comments': OFF,
    'no-with': ERROR,
    'radix': ERROR,
    'require-await': OFF,
    'vars-on-top': OFF,
    'wrap-iife': ERROR,
    'yoda': ['error', 'never'],
    // strict mode
    'strict': ['error', 'never'],
    // variables
    'init-declarations': OFF,
    'no-catch-shadow': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': ERROR,
    'no-shadow': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-undef-init': ERROR,
    'no-undef': ERROR,
    'no-undefined': OFF,
    'no-unused-vars': OFF, // doesn't work with TypeScript, use TSLint to catch these
    'no-use-before-define': OFF,
    // node.js and commonjs
    'callback-return': ['warn', ['callback', 'cb']],
    'global-require': WARN,
    'handle-callback-err': ['error', '^err'],
    'no-buffer-constructor': ERROR,
    'no-mixed-requires': ERROR,
    'no-new-require': ERROR,
    'no-path-concat': ERROR,
    'no-process-env': WARN,
    'no-process-exit': ERROR,
    'no-restricted-modules': ERROR,
    'no-sync': OFF,
    // stylistic issues
    'array-bracket-newline': OFF,
    'array-bracket-spacing': OFF,
    'array-element-newline': OFF,
    'block-spacing': WARN,
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'camelcase': ['warn', { properties: 'never' }],
    'capitalized-comments': OFF,
    'comma-dangle': ['error', 'never'],
    'comma-spacing': WARN,
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': WARN,
    'consistent-this': WARN,
    'eol-last': WARN,
    'func-call-spacing': WARN,
    'func-name-matching': ERROR,
    'func-names': OFF,
    'func-style': OFF,
    'function-paren-newline': OFF,
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': WARN,
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': ['warn', { beforeBlockComment: true, beforeLineComment: false }],
    'max-depth': ['warn', 5],
    'max-len': ['warn', 120],
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': ['warn', 5],
    'max-params': ['warn', 5],
    'max-statements': ['warn', 50],
    'max-statements-per-line': OFF,
    'multiline-ternary': OFF,
    'new-cap': OFF,
    'new-parens': WARN,
    'newline-per-chained-call': OFF,
    'no-array-constructor': WARN,
    'no-bitwise': WARN,
    'no-continue': OFF,
    'no-inline-comments': OFF,
    'no-lonely-if': WARN,
    'no-mixed-operators': OFF,
    'no-mixed-spaces-and-tabs': ['warn', false],
    'no-multiple-empty-lines': WARN,
    'no-negated-condition': OFF,
    'no-nested-ternary': WARN,
    'no-new-object': WARN,
    'no-plusplus': OFF,
    'no-restricted-syntax': OFF,
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': WARN,
    'no-underscore-dangle': OFF,
    'no-unneeded-ternary': OFF,
    'no-whitespace-before-property': WARN,
    'nonblock-statement-body-position': WARN,
    'object-curly-newline': OFF,
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': OFF,
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': ['warn', 'after'],
    'padded-blocks': OFF,
    'quote-props': OFF,
    'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    'require-jsdoc': OFF,
    'semi': ERROR,
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': WARN,
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-before-blocks': WARN,
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],
    'space-in-parens': WARN,
    'space-infix-ops': WARN,
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': ['warn', 'always', { exceptions: ['-'] }],
    'switch-colon-spacing': WARN,
    'template-tag-spacing': WARN,
    'unicode-bom': ERROR,
    'wrap-regex': OFF,
    // ECMAScript 6
    'arrow-body-style': OFF,
    'arrow-parens': OFF,
    'arrow-spacing': ['warn', { before: true, after: true }],
    'constructor-super': WARN,
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'no-class-assign': ERROR,
    'no-confusing-arrow': OFF,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': ERROR,
    'no-new-symbol': ERROR,
    'no-restricted-imports': OFF,
    'no-this-before-super': ERROR,
    'no-useless-computed-key': WARN,
    'no-useless-constructor': OFF, // as of 05/March/2019 is broken
    'no-useless-rename': WARN,
    'no-var': WARN,
    'object-shorthand': ['warn', 'always'],
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true, allowUnboundThis: true }],
    'prefer-const': ['warn', { destructuring: 'all' }],
    'prefer-destructuring': OFF,
    'prefer-numeric-literals': OFF,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': OFF,
    'require-yield': WARN,
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': OFF,
    'symbol-description': WARN,
    'template-curly-spacing': ['warn', 'never'],
    'yield-star-spacing': ['warn', { before: false, after: true }]
  }
};

let typescriptVersion;
try {
  const typescriptPackageJson = require('typescript/package.json');
  typescriptVersion = typescriptPackageJson.version;
} catch (err) {
  // no-op
}

if (typescriptVersion) {
  try {
    require('@typescript-eslint/parser');
  } catch (err) {
    console.error(`typescript ${typescriptVersion} found, but not able to load @typescript-eslint/parser: ${err}`);
  }
}

if (typescriptVersion) {
  eslintConfig.parser = '@typescript-eslint/parser';
  eslintConfig.parserOptions = eslintConfig.parserOptions || {};
  eslintConfig.parserOptions.sourceType = 'module';
}

let reactVersion;
try {
  const reactPackageJson = require('react/package.json');
  reactVersion = reactPackageJson.version;
} catch (err) {
  // no-op
}

if (reactVersion) {
  try {
    require('eslint-plugin-react');
  } catch (err) {
    console.error(`react ${reactVersion} found, but not able to load eslint-plugin-react: ${err}`);
  }
}

if (reactVersion) {
  // enable jsx
  eslintConfig.parserOptions = eslintConfig.parserOptions || {};
  eslintConfig.parserOptions.ecmaFeatures = eslintConfig.parserOptions.ecmaFeatures || {};
  eslintConfig.parserOptions.ecmaFeatures.jsx = true;
  // add react plugin
  eslintConfig.plugins = eslintConfig.plugins || [];
  eslintConfig.plugins.push('react');
  // add extends
  eslintConfig.extends = eslintConfig.extends || [];
  eslintConfig.extends.push('plugin:react/recommended');
  // add browser env
  eslintConfig.env = eslintConfig.env || {};
  eslintConfig.env.browser = true;
  // add react version
  eslintConfig.settings = eslintConfig.settings || {};
  eslintConfig.settings.react = eslintConfig.settings.react || {};
  eslintConfig.settings.react.version = reactVersion;
  // add rules
  Object.assign(eslintConfig.rules, {
    'react/display-name': OFF,
    'react/prop-types': OFF,
    'react/no-unescaped-entities': OFF,
    // JSX-specific rules
    'react/jsx-boolean-value': ['warn', 'always'], // v3.0.1 - 'never' conflicts with tslint
    'react/jsx-child-element-spacing': WARN,
    'react/jsx-closing-bracket-location': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-curly-spacing': WARN,
    'react/jsx-equals-spacing': WARN,
    'react/jsx-filename-extension': OFF,
    'react/jsx-first-prop-new-line': WARN,
    'react/jsx-handler-names': OFF,
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': WARN,
    'react/jsx-max-depth': OFF,
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': WARN,
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-target-blank': WARN,
    'react/jsx-no-undef': WARN,
    'react/jsx-one-expression-per-line': WARN,
    'react/jsx-curly-brace-presence': WARN,
    'react/jsx-fragments': OFF,
    'react/jsx-pascal-case': OFF,
    'react/jsx-props-no-multi-spaces': ERROR,
    'react/jsx-sort-default-props': WARN,
    'react/jsx-sort-props': OFF,
    'react/jsx-tag-spacing': WARN,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    'react/jsx-wrap-multilines': WARN
  });
}

module.exports = eslintConfig;
