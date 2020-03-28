'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'ybq87.top'
const port = 8083
module.exports = {
    publicPath: '/',
    outputDir: 'www',
    assetsDir: 'static/portal',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/v': {
                target: 'http://localhost:8081/v',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}
