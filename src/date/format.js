/**
 * 定义一个简单的日期格式化方法
 * y+: 年份,yy,yyyy,缺点：输入几个y就显示几个y
 * M+: 月份,M（1-12）,MM（01-12）
 * d+: 月份中的天数,d(1-31),dd(01-31)
 * h+: 小时,h(1-24),hh(01-24),缺点：不兼容12小时制
 * m+: 分钟,h(0-59),m(00-59)
 * s+: 秒钟,s(0-59),s(00-59)
 * @param {*} date 
 * @param {*} format 
 * @return string
 */
let format = function (date, format) {
    // 定义一个对象，key-年月日时分秒的字符串正则，value-获取到对应的值
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
    }
    // 正则匹配年份
    if (/(y+)/.test(format)) { // 如果字符串参数中至少含有一个y
        // 替换字符串中，正则匹配到的 (y+) 为 获取到的日期对象的年份的子字符串(从4-正则匹配到的字符串的长度开始截取)
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    // 遍历定义的对象
    for (var k in o) {
        // 正则匹配定义对象的key值，分别对 年月日时分秒 进行正则匹配
        if (new RegExp("(" + k + ")").test(format)) {
            // 如果匹配到的字符串的长度是1，则显示一位，
            // 否则，用00拼接定义对象的value，获取其子字符串（从其key对应的value的长度为下标开始截取）
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

export default format