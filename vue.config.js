const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})



const path = require("path");
module.exports = {
  pluginOptions: {
    lintOnSave: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src/"))
      .set("@assets", path.resolve(__dirname, "src/assets/"));
  },
  
};              