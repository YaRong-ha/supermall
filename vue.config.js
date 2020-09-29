const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: resolve("src"),
        assets: resolve("src/assets"),
        common: resolve("src/common"),
        components: resolve("src/components"),
        network: resolve("src/network"),
        views: resolve("src/views"),
      },
    },
  },
};
