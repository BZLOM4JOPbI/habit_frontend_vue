/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        "indent": ["error", 4,],
        "comma-dangle": [
            "error", 
            {
                "arrays": "always",
                "objects": "always",
                "imports": "always",
                "exports": "always",
                "functions": "never",
            },
        ],
        "object-curly-spacing" : [
            "error",
            {
                "arraysInObjects" : "always",
                "objectsInObjects" : "always",
            },
        ],
        "array-bracket-spacing" : [
            "error",
            {
                "singleValue": "always",
                "objectsInArrays" : "always",
                "arraysInArrays" : "always",
            },
        ],
        "comma-spacing" : [
            "error",
            {
                "before": "never",
                "after": "always",
            }
        ],
    },
}
