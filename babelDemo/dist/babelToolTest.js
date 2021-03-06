"use strict";

var _core = require("@babel/core");

var _parser = require("@babel/parser");

var _generator = _interopRequireDefault(require("@babel/generator"));

var _types = _interopRequireDefault(require("@babel/types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "codes.map(code=>{\n\t   return code.toUpperCase()\n   })";
console.info("=====code:", code); // 转换代码为ast树

var a = (0, _parser.parse)(code);
console.info("=====parse test:", a); // 转换ast语法书为代码字符串

var output = (0, _generator.default)(a, {
  sourceMaps: true
}, code);
console.info("=====generate test:", output); //visitor可以对特定节点进行处理
// let visitor = {
//     t.arrowFunctionExpression(path) {//定义需要转换的节点,这里拦截箭头函数
//         let params = path.node.params
//         let blockStatement = path.node.body
//         //使用babel-types的functionExpression方法生成新节点
//         let func = types.functionExpression(null, params, blockStatement, false, false)
//         //替换节点
//         path.replaceWith(func) //
//     }
// }
//
// let result = transform(code, {
//     plugins: [
//         visitor
//     ]
// });

console.info('=====transform test:', result.code);
//# sourceMappingURL=babelToolTest.js.map