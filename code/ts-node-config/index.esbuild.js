const path = require("path");

const { register } = require("esbuild-register/dist/node");

const interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
};

const loadTSConfigFile = async (configPath) => {
    const { unregister } = register({
        // ...options
    });

    const configObject = interopRequireDefault(require(configPath)).default;

    // Unregister the require hook if you don't need it anymore
    unregister();

    return configObject;
};

const getConfig = async () => {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "./config.ts");
    console.time("time");
    const config = await loadTSConfigFile(configPath);
    console.timeEnd("time");
    console.log(config);
};

getConfig();
