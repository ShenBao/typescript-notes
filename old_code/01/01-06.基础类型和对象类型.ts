// 基础类型 null, undefined, symbol, boolean, void
const count: number = 123;
const teacherName: string = 'ZhangSan';

// 对象类型
class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'LiSi',
  age: 18
};

const numbers: number[] = [1, 2, 3];

const zhangsan: Person = new Person();

const getTotal: () => number = () => {
  return 123;
};
