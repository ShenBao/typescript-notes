# React 组件与类型

## 创建函数组件和类组件

### 函数组件

React 可以通过函数或类的形式创建组件，接下来实现一个函数组件的示例。

```tsx
import React from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

const HelloFn = (props: Greeting) => <Button>Hello { props.name }</Button>

HelloFn.defaultProps = {
  name: 'React Function'
}

export default HelloFn
```

`defaultProps` 可以为接口提供默认值。

除了上面这种直接定义函数的方式之外，React 声明文件中对函数组件单独定义了一个类型 `React.FC`。

```tsx
const HelloFn: React.FC<Greeting> = ({
  name,
  children
}) => <Button>Hello { name }</Button>
```

使用 `React.FC` 优点是，它的参数中隐含提供了 `children` 属性，在调用 `defaultProps` 方法时，编译器会提示，但是为它设置默认属性时，对应接口中定义的属性需要设置成**可选属性**。

综合来讲，我们推荐直接定义函数的方式来实现函数组件。

### 类组件

类组件需要继承 `React.Component`，在 `React.Component` 的子类中有个必须定义的 `render()` 函数。

```tsx
import React, { Component } from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

interface HelloState {
  count: number
}

class HelloClass extends Component<Greeting, HelloState> {
  state: HelloState = {
    count: 0
  }
  static defaultProps = {
    name: 'React Class'
  }
  render () {
    return (
      <>
        <p>count: { this.state.count }</p>
        <Button onClick={ () => this.setState({ count: this.state.count + 1 }) }>Hello { this.props.name }</Button>
      </>
    )
  }
}

export default HelloClass
```

在 TypeScript 中 `Component` 被定义为泛型类，它有三个参数，第一个参数表示这个类属性的类型，第二个表示状态类型，第三个参数为 snapshot。

## 高阶组件和 Hooks

### React 组件演化

| 组件复用方式 | 优势 | 劣势 | 状态 |
| -- | -- | -- | -- |
| 类组件（class）| 发展时间长，接受度广泛 | 只能继承父类 | 传统模式，长期存在 |
| Mixin | 可以复制任意对象的任意多个方法 | 组件相互依赖、耦合，可能产生冲突，不利于维护 | 抛弃 |
| 高阶组件（HOC）| 利用装饰器模式，在不改变组件的基础上，动态为其添加新的能力 | 嵌套过多调试困难，需要遵循某些约定（不改变原始组件，必须要透传 props 等）| 能力强大，应用广泛 |
| Hooks | 代替 class，多个 Hooks 互不影响，避免嵌套低于，开发效率高 | 切换到新思维需要成本 | React 的未来 |

### 高阶组件（HOC）

```tsx
import React from 'react'

import HelloClass from './hello-class'

interface Loading {
  loading: boolean
}

function HelloHoc<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render () {
      const { loading, ...props } = this.props
      return loading ? <div>Loading ...</div> : <WrappedComponent { ...props as P }/>
    }
  }
}

export default HelloHoc(HelloClass)
```

### Hooks

```tsx
import React, { useState, useEffect }from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    if (count > 5) {
      setText('stop!!!')
    }
  }, [count])

  return (
    <>
      <p>你点击了 { count } 次 { text }</p>
      <Button onClick={() => setCount(count + 1)}>
        Hello { props.name }
      </Button>
    </>
  )
}

HelloHooks.defaultProps = {
  name: 'React Hooks'
}

export default HelloHooks
```
