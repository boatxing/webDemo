import { transform } from "@babel/core";
import { parse } from "@babel/parser";
import generate from '@babel/generator';
import types from '@babel/types';

let code =
    `codes.map(code=>{
	   return code.toUpperCase()
   })`
console.info("=====code:", code);

// 转换代码为ast树
const a = parse(code)
console.info("=====parse test:", a);

// 转换ast语法书为代码字符串
const output = generate(a, { sourceMaps: true }, code);
console.info("=====generate test:", output)

//visitor可以对特定节点进行处理
let visitor = {
    t.arrowFunctionExpression(path) {//定义需要转换的节点,这里拦截箭头函数
        let params = path.node.params
        let blockStatement = path.node.body
        //使用babel-types的functionExpression方法生成新节点
        let func = types.functionExpression(null, params, blockStatement, false, false)
        //替换节点
        path.replaceWith(func) //
    }
}

let result = transform(code, {
    plugins: [
        visitor
    ]
});

console.info('=====transform test:', result.code);
