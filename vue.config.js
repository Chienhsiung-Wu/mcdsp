const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: true,
        port: 8000,
        host: "127.0.0.1",
        // proxy: {
        //     "/nad-xj": {
        //         target: "",
        //         changeOrigin: true,
        //     }
        // }
    },
    lintOnSave: false
})