// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'airbnb-base',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react', 'import', '@typescript-eslint'],
//   rules: {
//     semi: ['error', 'always'],
//     quotes: ['error', 'single'],
//     'max-len': ['error', { code: 120, tabWidth: 2 }],
//     indent: ['error', 2],
//     'space-before-function-paren': ['error', 'always'], // 表达式后边的空格
//     'comma-dangle': ['error', 'never'],
//     'no-multi-spaces': 1, // 不能用多余的空格
//     'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
//     'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
//     'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
//     'no-empty': 2, // 块语句中的内容不能为空
//     'no-extra-parens': 2, // 禁止非必要的括号
//     'no-extra-semi': 2, // 禁止多余的冒号
//     'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
//     'no-use-before-define': 2, // 未定义前不能使用
//     'arrow-parens': 0, // 箭头函数用小括号括起来
//     'arrow-spacing': 1, // =>的前/后括号
//     'key-spacing': [1, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
//     'lines-around-comment': 1, // 行前/行后备注
//     'spaced-comment': 1// 注释风格不要有空格什么的
//   }
// };
