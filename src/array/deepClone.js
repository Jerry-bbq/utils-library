/**
 * @desc 数组,对象的深拷贝
 */
let deepClone = function(obj) {
    // 先检测是不是数组和Object
    // let isArr = Object.prototype.toString.call(obj) === '[object Array]';
    let isArr = Array.isArray(obj);
    let isJson = Object.prototype.toString.call(obj) === '[object Object]';
    if (isArr) {
      // 克隆数组
      let newObj = [];
      for (let i = 0; i < obj.length; i++) {
        newObj[i] = deepClone(obj[i]);
      }
      return newObj;
    } else if (isJson) {
      // 克隆Object
      let newObj = {};
      for (let i in obj) {
        newObj[i] = deepClone(obj[i]);
      }
      return newObj;
    }
    // 不是引用类型直接返回
    return obj;
  };
export default deepClone