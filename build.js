const packager = require("electron-packager");
const options = {
    dir: "./", // 打包的目录，即项目根目录
    name: "calculator", // 应用程序名称
    platform: "darwin", // 目标平台，此处为 macOS
    arch: "x64", // 目标平台的 CPU 架构，此处为 64 位
    icon: "./icon.png", // 应用程序图标
    out: "./dist", // 输出目录
    overwrite: true, // 如果输出目录已经存在，是否覆盖
    asar: true, // 是否将应用程序打包成 asar 文件
    prune: true, // 是否在打包前删除无用的依赖
};

packager(options)
    .then((appPaths) => console.log(`打包成功，输出目录：${appPaths}`))
    .catch((error) => console.error(`打包失败：${error.message}`));
