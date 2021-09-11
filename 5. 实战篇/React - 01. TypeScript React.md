# typescript & react 手动搭建

安装 react 和 声明文件

```bash
$ npm i react react-dom @types/react @types/react-dom
```

## 修改tsconfig配置项

首先我们需要修改一下 `tsconfig.json` 中的配置项

```json
{
  "jsx": "react"   /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
}
```

`jsx` 配置项有以下参数:

- `preserve` 表示生成代码中会保留 JSX 以供后续的转换操作使用，比如：Babel。 另外，输出文件会带有 `.jsx` 扩展名。
- `react` 表示会生成 React.createElement，在使用前不需要再进行转换操作，输出文件的扩展名为 `.js`。
- `react-native` 相当于 `preserve`，它也保留了所有的 JSX，但是输出文件的扩展名是 `.js`。
- `react-jsx` 表示生成 `	_jsx("div", {}, void 0);`，输出文件的扩展名为 `.js`。
- `react-jsxdev` 表示生成 `	_jsxDEV("div", {}, void 0, false, {...}, this);`，输出文件的扩展名为 `.js`。

[了解更多JSX](https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage)

这里我们一般设置为 `react` 选项，如何是 React 17 + 可以考虑使用 react-jsx。

## 创建 tsx 文件

写一个简单的模板组件。

```ts
// /src/components/hello.tsx

import React from 'react'

interface Greeting {
  name: string
}

const hello = (props: Greeting) => <h1>Hello { props.name }</h1>

export default hello
```

如果编译器报出 `Cannot use JSX unless the '--jsx' flag is provided.` 的错误，可以检查一下 `tsconfig.json` 中的 `jsx` 是否配置错误。如果依然报错，可以重启 IDE。

接下来，将模板组件引入主文件。

```ts
// /src/index.tsx

import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/hello'

ReactDOM.render(
  <Hello name="TypeScript"></Hello>,
  document.getElementById('app')
)
```

## 修改webpack配置

```js
// /build/webpack.base.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```

设置 `entry` 为 `index.tsx`，`output` 设置文件名添加 `hash`，添加 `optimization` 配置项，将业务代码与引用 node_modules 的包分开。

执行 `npm run build` 命令后，打包目录如下：

```txt
├── app.3b98be32.js
├── index.html
└── vendors~app.60b76dfd.js
```

`app` 文件是业务代码，`vendors` 文件是项目引用的代码，它非常庞大。文件后面会带有 8 位数的 `hash`，这样只需要更新业务代码的话，只有 `app` 文件 `hash` 会改变。`vendors` 文件会不会更改，可以利用浏览器缓存机制，保证性能。

## creare-react-app 命令创建

```bash
$ npx create-react-app ts-react-app --typescript
```

我们先简单了解一下 `npx` 是什么？

### npx

`npx` 是一种在 `npm` 中的安装工具，我们平时使用 `npm` 比较多，在安装 `npm@5.2.0+` 的版本时，会自动安装 `npx`。如果没有可以手动安装一下。

```bash
$ npm install -g npx
```

### 调用项目安装的模块

`npx` 想要解决的主要问题是，调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。

```bash
$ npm install mocha -D
```

一般来说，调用 Mocha，只能在项目脚本和 package.json 的 script 字段里面，如果想在命令行下调用，必须像下面这样。

```bash
# 项目根目录下执行

$ node_modules/.bin/mocha --version
```

npx 的原理很简单，就是运行的时候，会到 node_modules/.bin 路径和环境变量 $PATH 里面，检查命令是否存在。

由于 `npx` 会检查环境变量 $PATH，所以系统命令也可以调用。

```bash
# 等于执行 ls

$ npx ls
```

需要注意，Bash 内置的命令不在 $PATH 里面。比如 `cd`，就不能用 `npx cd`。

### 避免全局安装模块

`npx` 能避免全局安装模块。比如，`create-react-app` 这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

```bash
$ npx create-react-app my-react-app
```

`npx` 会将 `create-react-app` 下载到一个临时目录，再次执行该命令，会重新下载。

下载全局模块时，`npx` 允许制定版本。

```bash
$ npx uglify-js@3.1.0 main.js -o ./dist/main.js
```

指定使用 3.1.0 版本的 `uglify-js` 压缩脚本。

注意，只要 `npx` 后面的模块无法在本地发现，它就会下载同名模块。比如，本地没有安装 `http-server` 模块，当执行以下命令会自动下载该模块，并在当前目录启动一个 Web 服务。

```bash
$ npx http-server
```

### --no-install 和 --ignore-existing

如果想让 `npx` 强制使用本地模块，不下载远程模块，可以添加 `--on-install` 参数。如果本地不存在该模块，会报错。

```bash
$ npx http-server --on-install
```

如果想要忽略本地的同名模块，强制安装使用远程模块，可以添加 `--ignore-existing` 参数。比如，本地已经全局安装了 `create-react-app`，但还是想使用远程模块，就用这个参数。

```bash
$ npx create-react-app my-react-app --ignore-existing
```

### 使用不同版本的 node

利用 `npx` 可以下载模块这个特点，我们可以指定某个版本的 node 运行脚本。

```bash
$ npx node@8.0.0 -v
```

上面命令会使用 8.0.0 版本的 node 执行脚本。原理是从 `npm` 下载这个版本的 node，使用后再删除。

### -p 和 -c

`-p` 参数用于指定 `npx` 所要安装的模块，对于需要安装多个模块的场景非常有用。

```bash
$ npx -p lolcatjs -p cowsay [command]
```

如果 `npx` 安装多个模块，默认情况下，所执行的命令中，只有第一个可执行项会使用 `npx` 安装的模块，后面的可执行项还是会交给 Shell 解释。

```bash
$ npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'
```

上面的代码执行后，`cowsay hello | lolcatjs` 会报错，原因是第一项 `cowsay` 由 `npx` 解释，而第二项命令由 Shell 解释，但是 `lolcatjs` 并没有 全局安装，所以会报错。

这个问题可以用 `-c` 参数来解决，`-c` 参数的另一个作用，是将环境变量带入所有要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。

```bash
$ npm run env | grep npm_
```

`-c` 参数可以把这些 npm 的环境变量带入 `npx` 命令.

```bash
$ npx -c 'echo "$npm_package_name"'
```

上面代码会输出当前项目的项目名。

### 执行 GitHub 源码

`npx` 还可以执行 GitHub 上面的模块源码。

```bash
# 执行 Gist 代码
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# 执行仓库代码
$ npx github:piuccio/cowsay hello
```

注意，远程代码必须是一个模块，即必须包含 `package.json` 和入口脚本。

## 安装其他依赖包

使用 `yarn`

```bash
# 依赖
$ yarn add antd react-router-dom @types/react-router-dom

# 开发依赖
$ yarn add babel-plugin-import customize-cra http-proxy-middleware http-server react-app-rewired --dev
```

简单介绍以上包的作用

- `babel-plugin-import` 可以实现 `antd` 按需加载。
- `customize-cra` 和 `react-app-rewired` 可以帮助我们实现 `create-react-app` 脚手架的自定义。
- `http-proxy-middleware` 和 `http-server` 可以帮助我们搭建一个 mock server。
