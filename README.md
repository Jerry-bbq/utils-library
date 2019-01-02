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

包含的工具类函数：

````
    hasClass,
    addClass,
    removeClass,
    getCookie,
    setCookie,
    removeCookie,
    digitUppercase,
    checkID,
    checkMobile,
    checkCommonMobile
    deepClone
````