const path = require('path')
const buble = require('rollup-plugin-buble')
const cjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const nodeResolve = require('rollup-plugin-node-resolve')
const version = require('../package.json').version

const banner =
    '/* \n' +
    ` * this is a my JavaScript library\n` +
    ` * v${version} \n` +
    ' */'

const resolve = p => path.resolve(__dirname, '../', p)    
const builds = {
    'common': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/iutils.common.js'),
        format: 'cjs',
        banner
    },
    'esm': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/iutils.esm.js'),
        format: 'esm',
        banner
    },
    'umd': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/iutils.umd.js'),
        format: 'umd',
        banner
    },
    'min': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/iutils.min.js'),
        format: 'umd',
        banner
    },
}

function genConfig(name) {
    const opt = builds[name]
    const config = {
        input: opt.entry,
        plugins: [
            buble()
        ],
        output: {
            file: opt.dest,
            format: opt.format,
            banner: opt.banner,
            name: 'iUtil'
        }
    }
    return config
}

exports.getAllBuilds = () => Object.keys(builds).map(genConfig)