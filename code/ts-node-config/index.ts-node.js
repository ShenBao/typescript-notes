const path = require("path");

const interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
};

// Load the TypeScript configuration
const loadTSConfigFile = async (configPath) => {
    let registerer;

    // Register TypeScript compiler instance
    try {
        registerer = require("ts-node").register({
            compilerOptions: {
                module: "CommonJS",
            },
        });
    } catch (e) {
        if (e.code === "MODULE_NOT_FOUND") {
            throw new Error(
                `'ts-node' is required for the TypeScript configuration files. Make sure it is installed\nError: ${e.message}`
            );
        }

        throw e;
    }

    registerer.enabled(true);

    const configObject = interopRequireDefault(require(configPath)).default;

    registerer.enabled(false);

    return configObject;
};

const getConfig = async () => {
    const cwd = process.cwd();
    const configPath = path.join(cwd, "./config.ts");
    console.time('time');
    const config = await loadTSConfigFile(configPath);
    console.timeEnd('time');
    console.log(config);
};

getConfig();
