# TypeScript 中的数据验证利器：Zod 入门与实战

在 TypeScript 开发中，数据验证是非常重要的一环。它不仅可以确保输入数据的可靠性，还能在开发过程中提供更好的类型推断和错误提示。今天介绍一个强大的 TypeScript 数据验证库——Zod，以及如何在实际项目中使用它。

## 为什么选择 Zod？

Zod 是一个 TypeScript-first 的架构声明和验证库，与其他验证库相比，Zod 具有以下几个优势：

1. TypeScript 支持出色：Zod 提供了类型安全的验证方案，能够无缝集成 TypeScript 的类型系统。
2. 链式调用，易于使用：Zod 使用链式调用的方式来定义验证规则，API 设计直观且易于理解。
3. 强大的验证功能：除了常见的数据类型验证，Zod 还支持自定义验证、异步验证、架构合并等高级功能。

## 安装与基础使用

```bash
npm install zod
```

Zod 的基本用法非常简单，你可以通过链式调用来定义数据结构，并通过 .parse() 方法进行数据验证。例如：

```js
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

const userData = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};

const result = userSchema.parse(userData); // 验证成功
```

如果数据结构不符合预期，Zod 会抛出详细的错误信息，帮助你快速定位问题。

## 高级特性

### 可选字段与默认值

Zod 支持定义可选字段和设置默认值。例如，如果你希望 age 字段是可选的，并且 country 字段有一个默认值，可以这样做：

```js
const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
  email: z.string().email(),
  country: z.string().default("USA"),
});
```

### 联合类型与枚举

Zod 支持联合类型和枚举，可以帮助你处理多个可能的输入类型：

```js
const statusSchema = z.union([z.string(), z.number()]);
const roleSchema = z.enum(["Admin", "User", "Guest"]);
```

### 数组与元组

对于数组和固定长度的元组，你可以使用 .array() 和 .tuple() 来定义：

```js
const numberArraySchema = z.array(z.number());
const tupleSchema = z.tuple([z.string(), z.number()]);
```

### 自定义验证

Zod 允许你通过 .refine() 方法添加自定义验证逻辑，满足更复杂的需求：

```js
const passwordSchema = z.string().refine((val) => val.length >= 8, {
  message: "密码长度至少为8位",
});
```

### 异步验证

在一些需要异步验证的场景下，比如检查数据库中的唯一性，你可以使用 .refine() 和 .parseAsync() 方法：

```js
const asyncSchema = z.string().refine(async (val) => {
  const isUnique = await checkUniqueness(val);
  return isUnique;
}, {
  message: "值必须是唯一的",
});

await asyncSchema.parseAsync("test value");
```

## 实战案例：自动生成 UUID

在实际项目中，可能会遇到需要为某个字段生成唯一标识符（UUID）的情况。Zod 可以轻松实现这一点：

```js
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const schema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  name: z.string(),
  email: z.string().email(),
});

const dataWithDefaultId = schema.parse({
  name: "John Doe",
  email: "john.doe@example.com",
});

console.log(dataWithDefaultId);
// 输出类似于 { id: '550e8400-e29b-41d4-a716-446655440000', name: 'John Doe', email: 'john.doe@example.com' }
```

## 总结

Zod 是一个功能强大且灵活的 TypeScript 数据验证库，提供了直观的 API 和出色的类型支持。无论是简单的数据结构，还是复杂的自定义验证，Zod 都能帮助你轻松实现。


## 链接

- https://blog.csdn.net/lph159/article/details/143949913
