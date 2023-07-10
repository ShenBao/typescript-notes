# 掌握 TypeScript 数据类型与最佳实践

## 基本数据类型：构建坚实的基础

TypeScript 在 JavaScript 的基础上增加了类型系统，这意味着在编写代码时可以直接指定变量的类型。在 TypeScript 中，所有基本数据类型（值类型）在涉及到修改这些值类型的变量时，改变只会影响副本，而不会影响原始变量。这是因为基本数据类型在赋值时会创建一个新的副本，而不是共享同一个内存地址。

Boolean:
```ts
let isDone: boolean = true;
```
TypeScript 中的布尔值类型 boolean 与 JavaScript 相同，表示 true 或 false。但在 TypeScript 中，类型检查确保了只有布尔值才能赋值给 boolean 类型的变量。


Number:
```ts
let myAge: number = 25;
```
TypeScript 的 number 类型与 JavaScript 一致，但 TypeScript 的类型检查确保了数值操作的类型一致性。

String:
```ts
let myName: string = "Alice";
```
TypeScript 的 string 类型同样与 JavaScript 的字符串类型一致，但在 TypeScript 中，字符串类型的变量只能存储字符串值。

Null 和 Undefined:
```ts
let u: undefined = undefined;
let n: null = null;
```
null 表示一个空值，undefined 表示未定义的值。在 TypeScript 中，默认情况下 null 和 undefined 可以赋值给任何类型，但在严格模式下（通过 --strictNullChecks 启用），它们只能赋值给 null 和 undefined 或者 any 类型。

Any:
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, it's any
```

any 类型在 TypeScript 中代表任何类型。当你不确定一个值的具体类型时可以使用。虽然 any 类型可以让你暂时绕过类型检查，但应谨慎使用，因为它会削弱 TypeScript 的类型安全性。


Unknown:
```ts
let something: unknown = 4;
let num: number = something; // Error
let num2: number = something as number; // OK
```
类似于 any，但更安全。unknown 类型不能直接访问属性或调用方法，除非显式地将其转换为另一个类型。这有助于防止运行时错误。


Never:
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```
代表从不发生的类型，如抛出错误的函数的返回类型或无限循环的函数的返回类型。never 类型可以用来表示那些永远不会达到的代码路径。


Void:
```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```
通常用于表示没有返回值的函数。void 类型只有一个值：undefined。当你定义一个不返回任何值的函数时，可以使用 void 类型。


## 复合数据类型：组合与扩展

除了基本数据类型外，TypeScript 还提供了多种复合数据类型，使得我们可以构建更加复杂的对象模型。

Array:
```ts
let myNumbers: number[] = [1, 2, 3];
let myNumbers2: Array<number> = [1, 2, 3];

// number | string 表示一个变量可以是 number 类型或 string 类型
let arr: Array<number | string> = []    // 泛型数组
arr.push(123)
arr.push('hello')
```

可以通过 type 或 interface 来定义数组的元素类型，也可以使用类型后加方括号的形式，例如 number[] 或 Array<number>。数组是存储和操作一系列相同类型数据的最佳选择。

Tuple:
```ts
let x: [string, number];
x = ["hello", 10];  // OK
x = [10, "hello"];  // Error
```
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型可以不同。元组非常适合用于存储有序的、不同类型的数据集合。

Enum:
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
枚举类型为一组命名常量提供了一种方式。例如，定义颜色：enum Color {Red, Green, Blue}。枚举类型提高了代码的可读性和可维护性。

Object:
```ts
let obj: object = { name: "Alice", age: 25 };
```
任何非原始类型，即除了基本类型之外的所有类型。object 类型是一个非常通用的类型，用于表示任意的对象。


Interface:
```ts
interface Person {
  name: string;
  age?: number;  // "？"指可选属性
  [propName: string]: any;  // 任意索引属性
}

let tom: Person = { name: "Tom", age: 26 };
```
接口定义了对象的形状，可以指定对象应该有哪些属性和方法以及它们的类型。接口是实现面向接口编程的关键。


Type Aliases:
```ts
type NumOrStr = number | string;
let numOrStr: NumOrStr = 10;
numOrStr = "hello"; // OK
```
类型别名用于给一个类型起一个新的名字，例如 type NumOrStr = number | string;。类型别名可以使复杂的类型定义更加简洁易懂。

Class:
```ts
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

let d = new Dog("Mitzie");
```
类定义了构造函数和成员（属性和方法）。TypeScript 支持继承、抽象类等面向对象编程特性，这使得你可以构建层次化的类结构。

Function:
```ts
function add(x: number, y: number): number {
  return x + y;
}

let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
};
```
函数类型可以定义函数参数和返回值的类型。可以使用箭头函数或传统的函数声明来定义函数。函数是执行特定任务的代码块。


## 类型断言：灵活控制类型

类型断言允许开发者手动指定一个值的类型，有两种形式：<Type>value 和 value as Type。类型断言经常用于将 any 或 unknown 类型转换为其他类型。例如，当你需要在不完全了解类型的情况下使用某个值时，类型断言可以提供必要的灵活性。

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
strLength = (someValue as string).length;
```

## 泛型：创建可重用的组件

泛型允许创建可重用的函数、接口或类，它们可以针对不同的数据类型工作。例如，function identity<T>(arg: T): T { return arg; }。泛型增强了代码的复用性和类型安全性。
```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>(36); // OK
```

## 数组重载

在 TypeScript 中，数组重载是一种特殊的类型定义方式，它允许你定义多个函数签名，从而根据不同的参数类型返回不同类型的数组。这种机制在处理多态性和类型灵活性时非常有用，特别是在需要根据输入参数的类型来返回不同类型的数组时。通过合理地使用数组重载，可以提高代码的可读性和类型安全性。

### 示例
假设我们有一个函数，它根据传入的参数类型返回一个不同类型的数组。我们可以使用数组重载来定义这个函数的行为：

```ts
function createArray<T>(length: number, initialValue: T): T[];
function createArray(length: number, initialValue?: any): any[] {
  const result: any[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = initialValue;
  }
  return result;
}

// 使用示例
const intArray = createArray(5, 0); // 返回 number[] 类型
const stringArray = createArray(3, "hello"); // 返回 string[] 类型
const anyArray = createArray(4); // 返回 any[] 类型
```

### 解析示例

1. 定义重载签名：

```ts
function createArray<T>(length: number, initialValue: T): T[];
function createArray(length: number, initialValue?: any): any[];
```

- 第一个签名表示当传入一个长度和一个初始值时，返回一个泛型数组 T[]。
- 第二个签名表示当传入一个长度和一个可选的初始值时，返回一个 any 类型的数组 any[]。

2. 实现函数：

```ts
function createArray(length: number, initialValue?: any): any[] {
  const result: any[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = initialValue;
  }
  return result;
}
```

实现部分只需要定义一次，它返回一个any类型的数组。实际返回的数组类型由调用时传入的参数类型决定。

3. 调用函数：

```ts
const intArray = createArray(5, 0); // 返回 number[] 类型
const stringArray = createArray(3, "hello"); // 返回 string[] 类型
const anyArray = createArray(4); // 返回 any[] 类型
```

根据传入的不同初始值，函数返回不同类型的数组。当初始值为 number 时，返回 number[]；当初始值为 string 时，返回 string[]；当没有传入初始值时，返回 any[]。

### 数组重载的实际应用

数组重载在处理不同类型的数组时非常有用，特别是在需要根据输入参数的类型返回不同类型的数组时。例如，在一个库中，你可能希望提供一个通用的函数，它可以处理多种类型的数组。

## 联合类型与交集类型：混合使用

Union Types:
```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```
联合类型允许定义多个可能的类型之一。例如，let x: string | number;。联合类型使得你可以处理多种类型的数据。


Intersection Types:
```ts
interface Draggable {
  drag(): void;
}

interface Resizable {
  resize(): void;
}

type DraggableAndResizable = Draggable & Resizable;

class Widget implements DraggableAndResizable {
  drag() { /* ... */ }
  resize() { /* ... */ }
}
```

交集类型允许组合多个类型成为一个单一类型。例如，type DraggableAndResizable = Draggable & Resizable;。交集类型使得你可以定义具有多个接口特征的对象。


## 链接

- https://www.cnblogs.com/cczlovexw/p/17119697.html

