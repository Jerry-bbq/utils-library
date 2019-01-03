/**
 * 去字符串的首位空格
 * @desc 解决ie浏览器不支持trim
 */
export default function trim(){
    if (!String.prototype.trim){
        String.prototype.trim = function() {
            return this.replace(/(^\s*)|(\s*$)/g,'')
        }
    }
}