// getter and setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ', test';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('ZhangSan');
// console.log(person.name);
// person.name = 'ZhangSan';
// console.log(person.name);

class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('ZhangSan');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
