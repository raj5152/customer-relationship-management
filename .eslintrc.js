module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
		"parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-cond-assign": ["warn", "always"],
        "no-console": "off",
        "semi": 2,
        "for-direction": "warn",
        "arrow-body-style": ["warn", "always"],
        "consistent-return": 2,
        "no-duplicate-imports": "warn",
        "no-async-promise-executor": "warn",
        "no-await-in-loop": "warn",
        "no-extra-parens": "warn",
        "no-misleading-character-class": "warn",
        "no-prototype-builtins": "warn",
        "no-template-curly-in-string": "warn",
        "require-atomic-updates": "warn",
        "accessor-pairs": "warn",
        "array-callback-return": "warn",
        "block-scoped-var": "warn",
        "class-methods-use-this": "warn",
        "complexity": "warn",
        "curly": ["warn", "multi"],
        "default-case": "warn",
        "dot-location": "warn",
        "dot-notation": "warn",
        "eqeqeq": "warn",
        "guard-for-in": "warn",
        "max-classes-per-file": "warn",
        "no-alert": "warn",
        "no-caller": "warn",
        "no-div-regex": "warn",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eq-null": "warn",
        "no-eval": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-floating-decimal": "warn",
        "no-implicit-coercion": "warn",
        "no-implicit-globals": "warn",
        "no-implied-eval": "warn",
        "no-invalid-this": "warn",
        "no-iterator": "warn",
        "no-labels": "warn",
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-magic-numbers": [
            "warn",
            {
                "ignoreArrayIndexes": true
            }
        ],
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-wrappers": "warn",
        "no-octal-escape": "warn",
        "no-param-reassign": "warn",
        "no-proto": "warn",
        "no-restricted-properties": "warn",
        "no-return-assign": "warn",
        "no-return-await": "warn",
        "no-script-url": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-throw-literal": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": "warn",
        "no-useless-call": "warn",
        "no-useless-catch": "warn",
        "no-useless-concat": "warn",
        "no-useless-return": "warn",
        "no-void": "warn",
        "no-warning-comments": "warn",
        "no-with": "warn",
        "radix": "warn",
        "require-await": "warn",
        "require-unicode-regexp": "warn",
        "vars-on-top": "warn",
        "wrap-iife": "warn",
        "yoda": "warn",
        "strict": ["warn", "global"],
        "init-declarations": ["warn", "always"],
        "no-label-var": "warn",
        "no-restricted-globals": ["warn", "event"],
        "no-shadow": "warn",
        "no-shadow-restricted-names": "warn",
        "no-undef-init": "warn",
        "no-undefined": "warn",
        "no-use-before-define": "warn",
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": ["warn"],
        "generator-star-spacing": "warn",
        "no-confusing-arrow": "warn",
        "no-restricted-imports": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": [
            "warn",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-var": "warn",
        "object-shorthand": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "sort-imports": "warn",
        "symbol-description": "warn",
        "template-curly-spacing": ["warn", "never"],
        "yield-star-spacing": ["warn", "after"],
        "array-bracket-newline": ["warn", "never"],
        "array-bracket-spacing": ["warn", "never"],
        "array-element-newline": ["warn", "always"],
        "block-spacing": "warn",
        "brace-style": "warn",
        "camelcase": "warn",
        "capitalized-comments": ["warn", "always"],
        "comma-dangle": ["warn", "never"],
        "comma-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "consistent-this": ["warn", "that"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["warn", "never"],
        "func-name-matching": "warn",
        "func-names": ["warn", "always"],
        "func-style": ["warn", "expression"],
        "function-paren-newline": ["warn", "never"],
        "id-blacklist": ["warn", "callback"],
        "id-length": "warn",
        "id-match": ["warn", "^[a-zA-Z]+([A-Z][a-z]+)*$"],
        "implicit-arrow-linebreak": ["warn", "beside"],
        "indent": ["warn", 2],
        "jsx-quotes": ["warn", "prefer-double"],
        "key-spacing": [
            "warn",
            {
                "beforeColon": false
            }
        ],
        "keyword-spacing": [
            "warn",
            {
                "before": true
            }
        ],
        "line-comment-position": [
            "warn",
            {
                "position": "above"
            }
        ],
        "linebreak-style": ["warn", "windows"],
        "lines-around-comment": [
            "warn",
            {
                "beforeBlockComment": true
            }
        ],
        "lines-between-class-members": ["warn", "always"],
        "max-depth": ["warn", 4],
        "max-len": [
            "warn",
            {
                "code": 80
            }
        ],
        "max-lines": ["warn", 80],
        "max-lines-per-function": [
            "warn",
            {
                "max": 100
            }
        ],
        "max-nested-callbacks": ["warn", 3],
        "max-params": ["warn", 3],
        "max-statements": ["warn", 10],
        "max-statements-per-line": [
            "warn",
            {
                "max": 1
            }
        ],
        "multiline-comment-style": ["warn", "starred-block"],
        "multiline-ternary": ["warn", "always"],
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-per-chained-call": [
            "warn",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-array-constructor": "warn",
        "no-bitwise": "warn",
        "no-continue": "warn",
        "no-inline-comments": "warn",
        "no-lonely-if": "warn",
        "no-mixed-operators": "warn",
        "no-multi-assign": "warn",
        "no-multiple-empty-lines": "warn",
        "no-negated-condition": "warn",
        "no-nested-ternary": "warn",
        "no-new-object": "warn",
        "no-plusplus": [
            "warn",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-restricted-syntax": [
            "warn",
            "WithStatement",
            "BinaryExpression[operator='in']"
        ],
        "no-tabs": [
            "warn",
            {
                "allowIndentationTabs": true
            }
        ],
        "no-ternary": "warn",
        "no-trailing-spaces": ["warn"],
        "no-underscore-dangle": "warn",
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": ["warn", "beside"],
        "object-curly-newline": ["warn", "always"],
        "object-curly-spacing": ["warn", "never"],
        "object-property-newline": "warn",
        "one-var": ["warn", "always"],
        "one-var-declaration-per-line": ["warn", "initializations"],
        "operator-assignment": ["warn", "always"],
        "operator-linebreak": ["warn", "after"],
        "padded-blocks": ["warn", "never"],
        "padding-line-between-statements": [
            "warn",
            {
                "blankLine": "always",
                "prev": "var",
                "next": "return"
            }
        ],
        "prefer-object-spread": "warn",
        "quote-props": "warn",
        "quotes": ["warn", "double"],
        "semi-spacing": "warn",
        "semi-style": ["warn", "last"],
        "sort-keys": "warn",
        "sort-vars": "warn",
        "space-before-blocks": "warn",
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": [
            "warn",
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "new": false,
                    "++": false
                }
            }
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                "exceptions": ["-", "+"]
            }
        ],
        "switch-colon-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "template-tag-spacing": ["warn", "never"],
        "unicode-bom": "warn",
        "wrap-regex": "warn"
    }
};