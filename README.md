### 实现一个前端工具库

## 使用

安装相关依赖
````
yarn install
````

打包
````
npm run build
````
使用

第一种方式：直接安装dist文件中的`iutils.min.js`，支持umd通用模块规范

第二种方式：

安装：
````
yarn add utils-library -S
或者
npm i utils-library -S
````

使用
````
import { digitUppercase } from 'utils-library'
````

## api

### DOM

* [hasClass](./src/dom/hasClass.js)


````
    hasClass, // 是否有class
    addClass, // 添加class
    removeClass, // 删除class
    getCookie, // 获取cookie
    setCookie, // 设置cookie
    removeCookie, // 删除cookie
    digitUppercase, // 阿拉伯数字金额转换为汉字金额
    checkID,// 校验身份证号码
    checkMobile, // 校验严格手机号码
    checkCommonMobile,// 校验常规的手机号码
    trim,// 清空字符串的前后空格
    deepClone,// 数组深拷贝
    isEmptyObject// 是否是一个空对象
````