module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array-simple"
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        // "@typescript-eslint/no-unsafe-assignment": "off",
        // "@typescript-eslint/no-unsafe-member-access": "off",
        // "@typescript-eslint/no-unsafe-return": "off",
        // "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false,
            }
        ],
        "arrow-parens": [
            "off",
            "always"
        ],
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/order": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-new-wrappers": "error",
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-use-before-define": "off",
        "no-var": "error",
        "object-shorthand": "off",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "off",
        "quotes": "off",
        "radix": "error",
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off"
    }
};
