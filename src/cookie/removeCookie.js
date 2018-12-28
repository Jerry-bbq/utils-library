import setCookie from './setCookie'
/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
export default function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}