const path = require("path");

const interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
};

const loadTSConfigFile = async (configPath) => {
    try {
        require("@babel/register")({
            presets: [
                [
                    require.resolve("@babel/preset-env"),
                    {
                        targets: {
                            node: "current",
                        },
                        modules: "commonjs",
                    },
                ],
                [require.resolve("@babel/preset-typescript")],
            ],
            ignore: [/node_modules/],
            // only: onlySet,
            extensions: [".js", ".ts"],
            babelrc: false,
            cache: false,
        });
    } catch (e) {
        if (e.code === "MODULE_NOT_FOUND") {
            throw new Error(
                `'@babel/register' is required for the TypeScript configuration files. Make sure it is installed\nError: ${e.message}`
            );
        }
        throw e;
    }

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
