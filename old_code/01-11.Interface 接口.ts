// interface 和 type 相类似，但并不完全一致
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  }
};

getPersonName(person);
setPersonName(person, 'lee');

class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};
