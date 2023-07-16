# typescript-notes

任何可以使用 Javascript 来编写的应用，最终会由 JavaScript 编写。
--- Jeff Atwood, 2007

TypeScript 使重构变得轻松愉快.
--- Anders Hejlsberg（TypeScript的创造者），2012

任何可以使用 Javascript 来编写的优秀的大型应用，最终会由 TypeScript 编写。
--- 韩骏，2019

文档：
- [typescriptlang.org](https://www.typescriptlang.org)
- [tslang.cn](https://www.tslang.cn)
- [typescript doc](https://wangdoc.com/typescript/)
- [TypeScript Blog](https://devblogs.microsoft.com/typescript/)
- [microsoft/TypeScript](https://github.com/microsoft/TypeScript)

typescript-book：
- [TypeScript Deep Dive](https://github.com/basarat/typescript-book)
- [typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react)
- [awesome-typescript](https://github.com/dzharii/awesome-typescript)

type:
- [type-challenges](https://github.com/type-challenges/type-challenges)
- [utility-types](https://github.com/piotrwitek/utility-types)
- [type-fest](https://github.com/sindresorhus/type-fest)

TypeScript 学习笔记
- [TypeScript Nodes: https://github.com/ShenBao/typescript-notes](https://github.com/ShenBao/typescript-notes)
- [对应示例代码: https://github.com/ShenBao/typescript-notes/tree/master/code](https://github.com/ShenBao/typescript-notes/tree/master/code)

## 0. TypeScript Mind Map

1. [TypeScript Mind Map](%2F0.%20TypeScript%20Mind%20Map%2FTypeScript%20Mind%20Map.md)

## 1. 简介

1. [认识 TypeScript](%2F1.%20%E7%AE%80%E4%BB%8B%2F01.%20%E8%AE%A4%E8%AF%86%20TypeScript.md)
1. [类型基础](%2F1.%20%E7%AE%80%E4%BB%8B%2F02.%20%E7%B1%BB%E5%9E%8B%E5%9F%BA%E7%A1%80.md)
1. [安装 TypeScript](%2F1.%20%E7%AE%80%E4%BB%8B%2F03.%20%E5%AE%89%E8%A3%85%20TypeScript.md)
1. [Hello TypeScript](%2F1.%20%E7%AE%80%E4%BB%8B%2F04.%20Hello%20TypeScript.md)
1. [TypeScript 现状及未来，是否该学习？](%2F1.%20%E7%AE%80%E4%BB%8B%2F05.%20TypeScript%20%E7%8E%B0%E7%8A%B6%E5%8F%8A%E6%9C%AA%E6%9D%A5%EF%BC%8C%E6%98%AF%E5%90%A6%E8%AF%A5%E5%AD%A6%E4%B9%A0%EF%BC%9F.md)

## 2. 基础篇

1. [TypeScript 基础类型](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F01.%20TypeScript%20%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B.md)
1. [TypeScript 接口](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F02.%20TypeScript%20%E6%8E%A5%E5%8F%A3.md)
1. [TypeScript 函数](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F03.%20TypeScript%20%E5%87%BD%E6%95%B0.md)
1. [TypeScript 类](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F04.%20TypeScript%20%E7%B1%BB.md)
1. [TypeScript 类与接口](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F05.%20TypeScript%20%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3.md)
1. [TypeScript 泛型](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F06.%20TypeScript%20%E6%B3%9B%E5%9E%8B.md)
1. [TypeScript 类型检查机制](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F07.%20TypeScript%20%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E6%9C%BA%E5%88%B6.md)
1. [TypeScript 高级类型](%2F2.%20%E5%9F%BA%E7%A1%80%E7%AF%87%2F08.%20TypeScript%20%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.md)

## 3. 工程篇

1. [TypeScript 导入导出](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F01.%20TypeScript%20%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA.md)
1. [TypeScript 命名空间](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F02.%20TypeScript%20%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4.md)
1. [TypeScript 声明合并](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F03.%20TypeScript%20%E5%A3%B0%E6%98%8E%E5%90%88%E5%B9%B6.md)
1. [TypeScript 声明语法](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F04.%20TypeScript%20%E5%A3%B0%E6%98%8E%E8%AF%AD%E6%B3%95.md)
1. [TypeScript 声明文件](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F05.%20TypeScript%20%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6.md)
1. [TypeScript 工程引用](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F06.%20TypeScript%20%E5%B7%A5%E7%A8%8B%E5%BC%95%E7%94%A8.md)
1. [如何识别库的类型](%2F3.%20%E5%B7%A5%E7%A8%8B%E7%AF%87%2F07.%20%E5%A6%82%E4%BD%95%E8%AF%86%E5%88%AB%E5%BA%93%E7%9A%84%E7%B1%BB%E5%9E%8B.md)

## 4. 配置篇

1. [tsconfig 文件选项](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F01.%20tsconfig%20%E6%96%87%E4%BB%B6%E9%80%89%E9%A1%B9.md)
1. [tsconfig 编译选项](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F02.%20tsconfig%20%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9.md)
1. [vscode 编译异常](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F03.%20vscode%20%E7%BC%96%E8%AF%91%E5%BC%82%E5%B8%B8.md)
1. [TypeScript 编译工具](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F04.%20TypeScript%20%E7%BC%96%E8%AF%91%E5%B7%A5%E5%85%B7.md)
1. [TypeScript ESLint](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F05.%20TypeScript%20ESLint.md)
1. [TypeScript Jest](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F06.%20TypeScript%20Jest.md)
1. [附：tsconfig,json 编译选项](%2F4.%20%E9%85%8D%E7%BD%AE%E7%AF%87%2F%E9%99%84%EF%BC%9Atsconfig.json%20%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9.md)

## 5. 实战篇

1. [TypeScript 迁移策略](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2F01.%20TypeScript%20%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5.md)
1. [React - 01, TypeScript React](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2FReact%20-%2001.%20TypeScript%20React.md)
1. [React - 02, React 组件与类型](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2FReact%20-%2002.%20React%20%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E5%9E%8B.md)
1. [React - 03, React 请求数据及 Redux](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2FReact%20-%2003.%20React%20%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE%E5%8F%8A%20Redux.md)
1. [Vue - 01, TypeScript Vue](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2FVue%20-%2001.%20TypeScript%20Vue.md)
1. [Vue - 02, Vue 组件与类型](%2F5.%20%E5%AE%9E%E6%88%98%E7%AF%87%2FVue%20-%2002.%20Vue%20%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E5%9E%8B.md)

## 6. 进阶篇

1. [TS 基础、技巧性技能](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F01.%20TS%20%E5%9F%BA%E7%A1%80%E3%80%81%E6%8A%80%E5%B7%A7%E6%80%A7%E6%8A%80%E8%83%BD.md)
1. [简介](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F01.%20%E7%AE%80%E4%BB%8B.md)
1. [全面深度掌握 TS 类](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F02.%20%E5%85%A8%E9%9D%A2%E6%B7%B1%E5%BA%A6%E6%8E%8C%E6%8F%A1%20TS%20%E7%B1%BB.md)
1. [TS 类方法代码优化的三大法宝](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F03.%20TS%20%E7%B1%BB%E6%96%B9%E6%B3%95%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96%E7%9A%84%E4%B8%89%E5%A4%A7%E6%B3%95%E5%AE%9D.md)
1. [单件设计模式](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F04.%20%E5%8D%95%E4%BB%B6%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md)
1. [TS 继承深入+手写优化底层源码](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F05.%20TS%20%E7%BB%A7%E6%89%BF%E6%B7%B1%E5%85%A5%2B%E6%89%8B%E5%86%99%E4%BC%98%E5%8C%96%E5%BA%95%E5%B1%82%E6%BA%90%E7%A0%81.md)
1. [TS 高频使用技能： 类型断言、类型守卫、自定义守卫+ 多态+类型守卫组合应用](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F06.%20TS%20%E9%AB%98%E9%A2%91%E4%BD%BF%E7%94%A8%E6%8A%80%E8%83%BD%EF%BC%9A%20%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%E3%80%81%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%88%E5%8D%AB%2B%20%E5%A4%9A%E6%80%81%2B%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB%E7%BB%84%E5%90%88%E5%BA%94%E7%94%A8.md)
1. [泛型类+泛型接口+泛型类约束的复杂应用](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F07.%20%E6%B3%9B%E5%9E%8B%E7%B1%BB%2B%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3%2B%E6%B3%9B%E5%9E%8B%E7%B1%BB%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%8D%E6%9D%82%E5%BA%94%E7%94%A8.md)
1. [深度掌握泛型函数、泛型函数重载](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F08.%20%E6%B7%B1%E5%BA%A6%E6%8E%8C%E6%8F%A1%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0%E3%80%81%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD.md)
1. [深入infer、TS高级类型、泛型再进阶](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F09.%20%E6%B7%B1%E5%85%A5infer%E3%80%81TS%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B%E3%80%81%E6%B3%9B%E5%9E%8B%E5%86%8D%E8%BF%9B%E9%98%B6.md)
1. [装饰器应用，底层 JS 到 仿 Nestjs实战，路由器底层复杂泛型](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F10.%20%E8%A3%85%E9%A5%B0%E5%99%A8%E5%BA%94%E7%94%A8%EF%BC%8C%E5%BA%95%E5%B1%82%20JS%20%E5%88%B0%20%E4%BB%BF%20Nestjs%E5%AE%9E%E6%88%98%EF%BC%8C%E8%B7%AF%E7%94%B1%E5%99%A8%E5%BA%95%E5%B1%82%E5%A4%8D%E6%9D%82%E6%B3%9B%E5%9E%8B.md)
1. [运用 TS 手写 Promise 源码](%2F6.%20%E8%BF%9B%E9%98%B6%E7%AF%87%2F11.%20%E8%BF%90%E7%94%A8%20TS%20%E6%89%8B%E5%86%99%20Promise%20%E6%BA%90%E7%A0%81.md)

## 7. 技巧篇

1. [编译工具是如何读取并转换 config,ts 的](%2F7.%20%E6%8A%80%E5%B7%A7%E7%AF%87%2F%E7%BC%96%E8%AF%91%E5%B7%A5%E5%85%B7%E6%98%AF%E5%A6%82%E4%BD%95%E8%AF%BB%E5%8F%96%E5%B9%B6%E8%BD%AC%E6%8D%A2%20config.ts%20%E7%9A%84.md)

## 8. Articles

1. [vscode 开启 eslint 自动校验](%2F8.%20Articles%2F001.%20vscode%20%E5%BC%80%E5%90%AF%20eslint%20%E8%87%AA%E5%8A%A8%E6%A0%A1%E9%AA%8C.md)
1. [TS 高级类型工具](%2F8.%20Articles%2F002.%20TS%20%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B%E5%B7%A5%E5%85%B7.md)
1. [tsdx](%2F8.%20Articles%2F003.%20tsdx.md)
1. [ts 的 4,9 属性之 satisfies](%2F8.%20Articles%2F006.%20ts%20%E7%9A%84%204.9%20%E5%B1%9E%E6%80%A7%E4%B9%8B%20satisfies.md)

## 9. md

1. [TypeScript 中的数据验证利器：Zod 入门与实战](%2F9.%20md%2FTypeScript%20%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E9%AA%8C%E8%AF%81%E5%88%A9%E5%99%A8%EF%BC%9AZod%20%E5%85%A5%E9%97%A8%E4%B8%8E%E5%AE%9E%E6%88%98.md)
1. [掌握 TypeScript 数据类型与最佳实践](%2F9.%20md%2F%E6%8E%8C%E6%8F%A1%20TypeScript%20%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.md)

## ts-senior


### handle-promise


#### src


## More links

- [GitHub Home](https://github.com/ShenBao)
- [Blog Home](https://shenbao.github.io)
- [About Me](https://shenbao.github.io/about/)
