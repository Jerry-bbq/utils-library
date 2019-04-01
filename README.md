### 实现一个前端工具库

## 使用

安装相关依赖

``` bash
yarn install
```

打包

``` bash
npm run build
```

使用

第一种方式：直接安装dist文件中的`iutils.min.js`，支持umd通用模块规范

第二种方式：

安装：

``` bash
yarn add utils-library -S
或者
npm i utils-library -S
``` 

使用
``` javascript
import { digitUppercase } from 'utils-library'
```

## API文档

### DOM操作相关

- [hasClass](./src/dom/hasClass.js)&emsp;&emsp;是否有class
- [addClass](./src/dom/addClass.js)&emsp;&emsp;添加class
- [removeClass](./src/dom/removeClass.js)&emsp;&emsp;删除class

### Cookie操作相关

- [getCookie](./src/cookie/getCookie.js)&emsp;&emsp;获取cookie
- [setCookie](./src/cookie/setCookie.js)&emsp;&emsp;设置cookie
- [removeCookie](./src/cookie/removeCookie.js)&emsp;&emsp;删除cookie

### Array

- [deepClone](./src/array/deepClone.js)&emsp;&emsp;数组或对象的深拷贝
- [unique](./src/array/unique.js)&emsp;&emsp;数组去重

### Object

- [isEmptyObject](./src/object/isEmptyObject.js)&emsp;&emsp;判断一个对象是否是一个空对象

### 正则校验

- [checkID](./src/reg/checkID.js)&emsp;&emsp;15位和18位身份证号码验证的校验
- [checkMobile](./src/reg/mobile.js)&emsp;&emsp;校验严格手机号码
- [checkCommonMobile](./src/reg/commonMobile.js)&emsp;&emsp;校验常规的手机号码
- [trim](./src/reg/trim.js)&emsp;&emsp;去字符串的首尾空格
 
### 转换

- [digitUppercase](./src/digitUppercase/digitUppercase.js)&emsp;&emsp;金额阿拉伯数字转换为人民币大写

### 日期

- [format](./src/date/format.js) &emsp;&emsp;Date对象格式化
