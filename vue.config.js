const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        // 配置路径别名
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@network', resolve('src/network'))
            .set('@common', resolve('src/common'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
        //配置webpack解析模块时应该搜索的目录，将优先于node_modules搜索
        config.resolve.modules.add(resolve('src')).add(resolve('src/components'))
    },
    pluginOptions: {//第三方插件配置
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/assets/style/global.less")] // 引入全局样式变量
        }
    },
}
