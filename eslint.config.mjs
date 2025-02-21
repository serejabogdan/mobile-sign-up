import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

const importRules = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'import/order': [
      'error', {
        groups: ['builtin', 'external'],
        'newlines-between': 'ignore'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [1, { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
    curly: ['warn', 'all'],
    eqeqeq: ['warn', 'smart'],
    radix: ['warn', 'as-needed'],
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'import/no-unresolved': ['warn', { ignore: ['../extensiton/*'] }],
    'semi-spacing': ['warn', { before: false, after: true }],
    'no-fallthrough': ['warn', { commentPattern: 'no-break' }],
    'no-extend-native': ['warn', { exceptions: ['Error', 'Array'] }],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 1 }],
    'no-restricted-globals': ['warn', { name: 'event', message: 'Use local parameter instead.' }],
    'no-undef-init': ['warn'],
    'no-useless-computed-key': ['warn'],
    'no-unneeded-ternary': ['warn', { defaultAssignment: true }],
    'no-unsafe-negation': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'warn', {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_'
      }
    ],
    'no-unused-vars': ['warn', { vars: 'local', args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
    'space-in-parens': ['warn', 'never'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'comma-spacing': ['warn', { before: false, after: true }],
    'generator-star-spacing': ['warn', { before: true, after: true }],
    'prefer-const': ['warn', { ignoreReadBeforeAssign: true, destructuring: 'all' }],
    'dot-notation': ['warn', { allowKeywords: true }],
    'comma-style': ['warn', 'last'],
    'no-tabs': ['warn'],
    'default-case': ['warn'],
    'prefer-spread': ['warn'],
    'no-else-return': ['warn'],
    'prefer-template': ['warn'],
    'no-multi-assign': ['warn'],
    'constructor-super': ['warn'],
    'no-useless-escape': ['warn'],
    'yield-star-spacing': ['warn'],
    'max-depth': ['warn', { max: 5 }],
    'max-params': ['warn', { max: 4 }],
    'dot-location': ['warn', 'property'],
    'func-call-spacing': ['warn', 'never'],
    'quote-props': ['warn', 'as-needed'],
    'block-spacing': ['warn', 'always'],
    'key-spacing': ['warn', { afterColon: true }],
    'operator-linebreak': ['warn', 'before'],
    'template-curly-spacing': ['off'],
    indent: ['warn', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    'space-before-blocks': ['warn', 'always'],
    'rest-spread-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'max-statements-per-line': ['warn', { max: 2 }],
    'no-confusing-arrow': ['off', { allowParens: true }],
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'class-methods-use-this': ['warn', { exceptMethods: ['render'] }],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'symbol-description': ['error'],
    quotes: ['error', 'single'],
    'eol-last': ['warn', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['warn', 'always'],
    'no-spaced-func': ['error'],
    'no-unused-labels': ['error'],
    'no-undefined': ['off'],
    'new-parens': ['error'],
    'require-yield': ['error'],
    'unicode-bom': ['error'],
    'no-floating-decimal': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': ['warn'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-with': ['warn'],
    yoda: ['error'],
    'no-new': ['error'],
    'no-undef': ['error'],
    'no-empty': ['error'],
    'no-bitwise': ['error'],
    'no-new-func': ['error'],
    'import/named': ['error'],
    'no-unreachable': ['error'],
    'react/prop-types': ['error'],
    'no-throw-literal': ['error'],
    'react/no-unused-state': ['warn'],
    'react/no-unused-prop-types': ['error'],
    'no-useless-rename': ['error'],
    'no-new-object': ['error'],
    'no-loop-func': ['error'],
    'no-multi-str': ['error'],
    'no-new-require': ['error'],
    'no-new-wrappers': ['error'],
    'no-sequences': ['error'],
    'no-useless-concat': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'no-var': ['error'],
    'no-proto': ['error'],
    'global-require': ['error'],
    'no-useless-call': ['error'],
    'block-scoped-var': ['error'],
    'no-useless-constructor': ['error'],
    'computed-property-spacing': ['error', 'never'],
    'react/default-props-match-prop-types': ['warn'],
    'id-blacklist': ['warn', 'err', 'cb', 'callback'],
    'max-nested-callbacks': ['error', { max: 4 }],
    'lines-between-class-members': ['error', 'always'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-underscore-dangle': ['warn', { allow: ['_object', '_number', '_instance', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
    'no-mixed-operators': ['error', { groups: [['&&', '||']] }],
    'no-restricted-imports': [
      'error', {
        paths: ['import1', 'import2'],
        patterns: ['import1/private/*', 'import2/*', '!import2/good']
      }
    ],
    'max-len': [
      'warn', {
        code: 160,
        comments: 200,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreStrings: true,
        ignorePattern: 'import',
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true
      }
    ],
    'react/display-name': ['off'],
    'react/jsx-curly-spacing': [
      'warn', {
        when: 'never',
        children: {
          when: 'always'
        }
      }
    ]
  }
};

const eslintConfig = [
  ...baseConfig,
  importRules,
];

export default eslintConfig;
