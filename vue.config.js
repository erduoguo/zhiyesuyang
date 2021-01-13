// const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  outputDir: process.env.VUE_APP_API_OUTPUTDIR_NAME,//打包后的地址文件名
  // baseUrl: '/' + process.env.VUE_APP_API_OUTPUTDIR_NAME,//打包后的路径
  publicPath: './',//'/questionnaire-frontend/'
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 'text-color': 'rgba(2, 0, 255, 1)',
            // 'border-color': 'rgba(2, 0, 255, 1)',

            hack: `true; @import "./src/theme/vant.less";`
          },
        },
      },
    },
  },
  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       args[0].title = '你想设置的title名字'
  //       return args
  //     })
  // }
  // publicPath: '/op-doctor/',

  // productionSourceMap: false,
  // configureWebpack: (config) => {
  //   // 判断为生产模式下，因为开发模式我们是想保存console的
  //   if (process.env.NODE_ENV === 'production') {
  //     config.optimization.minimizer.map((arg) => {
  //       const option = arg.options.terserOptions.compress;
  //       option.drop_console = true; // 打开开关
  //       return arg;
  //     });
  //   }
  // },

};
