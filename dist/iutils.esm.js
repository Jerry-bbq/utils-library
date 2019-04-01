/* 
 * this is a my JavaScript library
 * v1.0.4 
 */
/**
 * 
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele 
 * @param {String} cls 
 * @return {Boolean}
 */
function hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

/**
 * 
 * @desc   为元素添加class
 * @param  {HTMLElement} ele 
 * @param  {String} cls 
 */

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

/**
 * 
 * @desc 为元素移除class
 * @param {HTMLElement} ele 
 * @param {String} cls 
 */

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

/**
 * 15位和18位身份证号码验证
 * @returns {RegExp}
 */
function checkID(id) {
    var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    return reg.test(id);
}

/**
 * 手机号码正则
 * 2018/4/12号整理
 中国移动号段：134 135 136 137 138 139 147 150 151 152 157 158 159 178 182 183 184 187 188
 联通号段：186 185 156 131 130 155 132 176
 电信号段：189 181 180 153 133 177 173 199
 整理：
 130 131 132 133 134 135 136 137 138 139
 147
 150 151 152 153（缺少154） 155 156 157 158 159
 173 176 177 178
 180 181 182 183 184 185 186 187 188 189
 199
 第一位：1
 第二位：3 4 5 7 8 9
 第三位：根据第二位判断第三位
 后面八位：0-9
 * @returns {RegExp}
 */
function checkMobile(mobile) {
    var reg = /^((13[0-9])|(147)|(15([0-3]|(5-9)))|(17[3678])|(18[0-9])|(199))\d{8}$/;
    return reg.test(mobile);
}

/**
 * 校验1开头的11位手机号码
 */
function checkCommonMobile(mobile) {
    var reg = /^[1][0-9]{10}$/;
    return reg.test(mobile);
}

/**
 * 
 * @desc   现金额阿拉伯数字转换为数字大写
 * @param  {Number} n 
 * @return {String}
 */

/**
 * @desc 数组,对象的深拷贝
 */
var deepClone = function(obj) {
    // 先检测是不是数组和Object
    // let isArr = Object.prototype.toString.call(obj) === '[object Array]';
    var isArr = Array.isArray(obj);
    var isJson = Object.prototype.toString.call(obj) === '[object Object]';
    if (isArr) {
      // 克隆数组
      var newObj = [];
      for (var i = 0; i < obj.length; i++) {
        newObj[i] = deepClone(obj[i]);
      }
      return newObj;
    } else if (isJson) {
      // 克隆Object
      var newObj$1 = {};
      for (var i$1 in obj) {
        newObj$1[i$1] = deepClone(obj[i$1]);
      }
      return newObj$1;
    }
    // 不是引用类型直接返回
    return obj;
  };

/**
 * 数组去重
 * 利用对象的 hasOwnProperty属性
 * @param {*} arr 
 * @return [arr]
 * 测试数据: [1,2,1,'11','11',true,true,undefined,undefined,null,null,NaN,NaN,{},{},{a:1},{a:1}]
 */
var unique = function (arr) {
    if (!(arr instanceof Array)) {
        return new Error('参数不合法')
    }
    var obj = {};
    return arr.filter(function (v) {
        return obj.hasOwnProperty(typeof v + v) ? false : (obj[typeof v + v] = true)
    })
};

/**
 * 判断一个对象是否是空对象,true-是空对象，false-不是空对象
 * @param {*} obj 、
 * @return {Boolean}
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length > 0 ? false : true
}

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
var format = function (date, format) {
    // 定义一个对象，key-年月日时分秒的字符串正则，value-获取到对应的值
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
    };
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
};

export { hasClass, addClass, removeClass, getCookie, setCookie, removeCookie, checkID, checkMobile, checkCommonMobile, deepClone, unique, isEmptyObject, format };
