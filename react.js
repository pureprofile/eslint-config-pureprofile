const fs = require('fs');
const path = require('path');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const isCreateReactApp = fs.existsSync(path.resolve(__dirname, '..', 'react-scripts'));
// console.log(`isCreateReactApp=${isCreateReactApp}`);

const eslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  extends: ([
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    isCreateReactApp ? 'react-app' : undefined
  ]).filter(x => x != null),
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': ERROR,
    'curly': [ERROR, 'all'],
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, { allowPattern: '_' }],
    'eqeqeq': [ERROR, 'allow-null'],
    'no-else-return': [ERROR, {allowElseIf: false}],
    'no-multi-spaces': ERROR,
    'no-useless-return': ERROR,
    'no-process-env': ERROR,
    'no-process-exit': ERROR,
    // stylistic issues
    'block-spacing': WARN,
    'brace-style': [WARN, '1tbs', { allowSingleLine: true }],
    'comma-dangle': [WARN, 'never'],
    'comma-spacing': WARN,
    'comma-style': [WARN, 'last'],
    'computed-property-spacing': WARN,
    'eol-last': WARN,
    'func-call-spacing': WARN,
    'func-name-matching': ERROR,
    'indent': [WARN, 2, { SwitchCase: 1 }],
    'jsx-quotes': [WARN, 'prefer-double'],
    'key-spacing': [WARN, { beforeColon: false, afterColon: true }],
    'keyword-spacing': WARN,
    'linebreak-style': [WARN, 'unix'],
    'max-len': [WARN, 120],
    'max-params': [WARN, 5],
    'new-parens': WARN,
    'no-bitwise': WARN,
    'no-lonely-if': WARN,
    'no-mixed-spaces-and-tabs': WARN,
    'no-trailing-spaces': WARN,
    'quote-props': OFF,
    'quotes': [WARN, 'single', { allowTemplateLiterals: true }],
    'semi': [ERROR, 'always'],
    'semi-spacing': [WARN, { before: false, after: true }],
    'semi-style': [WARN, 'last'],
    'space-before-blocks': WARN,
    'space-before-function-paren': [WARN, { anonymous: 'always', named: 'never' }],
    'space-in-parens': WARN,
    'space-infix-ops': WARN,
    'space-unary-ops': [WARN, { words: true, nonwords: false }],
    'switch-colon-spacing': WARN,
    'template-tag-spacing': WARN,
    'unicode-bom': ERROR,
    // eslint-plugin-react rules
    'react/no-unknown-property': WARN,
    'react/self-closing-comp': WARN,
    'react/jsx-boolean-value': [WARN, 'always'],
    'react/jsx-closing-bracket-location': OFF, // tried, doesn't look nice
    'react/jsx-closing-tag-location': WARN,
    'react/jsx-curly-newline': OFF, // tried, doesn't look nice
    'react/jsx-curly-spacing': WARN,
    'react/jsx-equals-spacing': WARN,
    'react/jsx-first-prop-new-line': WARN,
    'react/jsx-indent': [WARN, 2, { checkAttributes: false, indentLogicalExpressions: false }],
    'react/jsx-indent-props': [WARN, 'first'],
    'react/jsx-max-props-per-line': [WARN, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-useless-fragment': WARN,
    'react/jsx-props-no-multi-spaces': WARN,
    'react/jsx-tag-spacing': WARN,
    'react/jsx-wrap-multilines': WARN,
    // disable unwanted recommended rules
    'camelcase': OFF,
    'no-unused-vars': OFF,
    'require-atomic-updates': OFF,
    'react/display-name': OFF,
    'react/jsx-child-element-spacing': OFF,
    'react/jsx-curly-brace-presence': OFF,
    'react/prop-types': OFF,
    '@typescript-eslint/camelcase': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/interface-name-prefix': OFF,
    '@typescript-eslint/no-empty-interface': OFF,
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/no-misused-promises': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-this-alias': OFF,
    '@typescript-eslint/no-unused-vars': OFF,
    '@typescript-eslint/no-use-before-define': OFF,
    '@typescript-eslint/require-await': OFF,
    '@typescript-eslint/unbound-method': OFF
  }
};

module.exports = eslintConfig;
