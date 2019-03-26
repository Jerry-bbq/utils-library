/**
 * 数组去重
 * 利用对象的 hasOwnProperty属性
 * @param {*} arr 
 * @return [arr]
 * 测试数据: [1,2,1,'11','11',true,true,undefined,undefined,null,null,NaN,NaN,{},{},{a:1},{a:1}]
 */
let unique = function (arr) {
    if (!(arr instanceof Array)) {
        return new Error('参数不合法')
    }
    var obj = {};
    return arr.filter(v => {
        return obj.hasOwnProperty(typeof v + v) ? false : (obj[typeof v + v] = true)
    })
}
export default unique