# 编译工具是如何读取并转换 config.ts 的

配置如下：

config.ts
```ts
import { IConfig } from "./types";

const defineConfig = (config: IConfig) => {
    return config;
};

export default defineConfig({
    post: 3000,
    https: true,
    routes: [
        {
            exact: true,
            path: "/",
            component: 'index'
        },
    ],
});
```

types.ts
```ts
export interface IConfig {
    /**
     * 端口号
     */
    post?: number;
    /**
     * 是否启用 https
     */
    https?: boolean;
    /**
     * 路由定义
     */
    routes?: {
        exact?: boolean;
        path: string;
        component: string;
    }[];
    /**
     * 配置 chainWebpack
     */
    // @ts-ignore
    chainWebpack?: (config) => void;
}
```

**在 js 文件中如何动态 require 一个 ts 文件？**


**方式1：`使用 ts-node`**

https://www.npmjs.com/package/ts-node

```bash
npm i -D ts-node typescript
```

```js
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
```

输出：
```ts
{
  post: 3000,
  https: true,
  routes: [ { exact: true, path: '/', component: 'index' } ]
}
```

**方式2：`使用 @babel/register`**

https://www.npmjs.com/package/@babel/register

```js
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
```

**方式3：`esbuild-register/`**

https://www.npmjs.com/package/esbuild-register

```bash
npm i esbuild esbuild-register -D
```

```js
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
```

**方式4：`swc-register`**

https://www.npmjs.com/package/swc-register

```bash
npm i @swc/core swc-register -D
```

```js
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
```
