/**
 * 数组去重
 * 利用对象的 hasOwnProperty属性
 * @param {*} arr 
 * @return [arr]
 * 测试数据: [1,2,1,'11','11',true,true,undefined,undefined,null,null,NaN,NaN,{},{},{a:1},{a:1}]
 * 问题: NaN,{},{a:1}并不能实现去重
 */
let unique = function (arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
export default unique