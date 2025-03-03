import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'error',
            camelcase: 'error',
            complexity: ['error', { max: 10 }],
            'max-depth': ['error', { max: 4 }],
            'max-lines-per-function': ['error', { max: 100 }],
            'no-duplicate-imports': 'error',
            'no-undef': 'error',
            'no-unused-vars': 'off',
            'no-useless-assignment': 'error',
            'prefer-const': 'error',
        },
    },
    {
        files: ['*.config.js', '*.config.ts'],
        languageOptions: {
            parser: tseslintParser,
        },
        rules: {
            'prefer-const': 'error',
            semi: ['error', 'never'],
        },
    },
    {
        files: ['**/*.test.ts', '**/*.test.tsx'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                expect: 'readonly',
                it: 'readonly',
                jest: 'readonly',
            },
        },
    },
]

export default eslintConfig
