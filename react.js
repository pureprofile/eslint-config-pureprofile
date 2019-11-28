const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const eslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'react-app'
  ],
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
    '@typescript-eslint/no-this-alias': OFF,
    '@typescript-eslint/no-unused-vars': OFF,
    '@typescript-eslint/no-use-before-define': OFF,
    '@typescript-eslint/require-await': OFF,
    '@typescript-eslint/unbound-method': OFF
  }
};

module.exports = eslintConfig;
