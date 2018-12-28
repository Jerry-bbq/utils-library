````
mkdir utils-library
npm init -y 
mkdir docs
touch docs/process.md
````

````
mkdir scripts
mkdir src
````

安装相关依赖

````
yarn add rollup -D
yarn add rollup-plugin-buble -D
yarn add rollup-plugin-commonjs -D
yarn add rollup-plugin-replace -D
yarn add rollup-plugin-node-resolve -D
yarn add terser -D
````

````
touch scripts/alias.js scripts/config.js scripts/build.js
````

````
mkdir src/class
touch src/class/addClass.js src/class/hasClass.js src/class/removeClass.js
````

配置package.json

````
"build": "node scripts/build.js",
````

支持：common.js esm，umd

es6模块写法，npm发布注意事项：
1. 创建.babelrc文件
````
{
    "presets": ["es2015", "stage-2"],
    "plugins": ["transform-runtime"],
    "comments": false
}
````
2. package.json配置
````
"main": "src/index.js",
````