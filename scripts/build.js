// 引入相关插件
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const rollup = require('rollup')
const terser = require('terser')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}
let builds = require('./config').getAllBuilds()

// 构建打包
build(builds)

/**
 * 定义构建打包
 * 参数 builds 数组
 */
function build (builds) {
  let built = 0
  const total = builds.length
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++
      if (built < total) {
        next()
      }
    }).catch(logError)
  }

  next()
}


/**
 * 打包入口
 * 参数为 builds数组中的每一项config
 */
function buildEntry (config) {
  const output = config.output // 文件出口
  const { file, banner } = output
  const isProd = /min\.js$/.test(file) // 匹配min.js结尾的文件
  //  rollup的提供的JavaScript aip ，rollup.rollup 函数返回一个 Promise
  return rollup.rollup(config)
    .then(bundle => bundle.generate(output))  // bundle.generate(output)生成code源码和map
    .then(({ code }) => {
      if (isProd) { // 如果文件是min则再次压缩文件并写入banner
        const minified = (banner ? banner + '\n' : '') + terser.minify(code, {
          output: {
            ascii_only: true
          },
          compress: {
            pure_funcs: ['makeMap']
          }
        }).code
        return write(file, minified, true)
      } else {
        return write(file, code)
      }
    })
}


/**
 * 写入文件的封装函数
 * dest：输出文件的绝对路径，通过output.file获取；
 * code：源码字符串，通过bundle.generate()获取；
 * zip：是否需要进行gzip压缩测试，如果isProd为true，则zip为true，反之为false。
 */
function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    /**
     * 输出日志函数
     * path.relative(process.cwd(), dest)：获取当前命令行路径到最终生成文件的相对路径
     * blue()：函数生成命令行蓝色的文本
     * getSize(code) ：获取文件容量
     *
     */
    function report (extra) {
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    /**
     * fs.writeFile异步写入
     * 三个参数 dest，code，以及回调函数
     *
     */
    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      if (zip) { // 如果zip存在，则使用zlib的gzip压缩
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}
// 获取源码的大写
function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}
/**
 * 打印错误日志
 */
function logError (e) {
  console.log(e)
}

/**
 * 使Node.js中的console.log()输出彩色字体
 */
function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
