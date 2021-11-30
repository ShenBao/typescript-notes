const path = require("path");

const interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
};

const loadTSConfigFile = async (configPath) => {
    const { register } = require("swc-register/dist/node");
    register({
        // ...swc options
    });

    const configObject = interopRequireDefault(require(configPath)).default;

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
