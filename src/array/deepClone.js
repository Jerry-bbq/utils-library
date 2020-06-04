/**
 * @desc 数组,对象的深拷贝
 * 采用递归的方式对数组和对象进行深拷贝
 */
let deepClone = function(obj) {
    // 先检测是不是数组和Object
    let isArray = Array.isArray(obj);
    let isObject= Object.prototype.toString.call(obj) === '[object Object]';
    if (isArray) {
      // 克隆数组
      let newObj = [];
      for (let i = 0; i < obj.length; i++) {
        newObj[i] = deepClone(obj[i]);
      }
      return newObj;
    } else if (isObject) {
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