/**
 * 判断一个对象是否是空对象,true-是空对象，false-不是空对象
 * @param {*} obj 、
 * @return {Boolean}
 */
export default function isEmptyObject(obj) {
    return Object.keys(obj).length > 0 ? false : true
}


