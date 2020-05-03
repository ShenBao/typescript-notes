import 'reflect-metadata';

class User {
  @Reflect.metadata('data', 'test')
  @Reflect.metadata('data1', 'test')
  getName() {}
}

class Teacher extends User {}

console.log(Reflect.getOwnMetadataKeys(User.prototype, 'getName'));
console.log(Reflect.getOwnMetadataKeys(Teacher.prototype, 'getName'));
