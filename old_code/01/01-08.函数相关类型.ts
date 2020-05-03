// function add(first: number, second: number): number {
//   return first + second;
// }

// function sayHello(): void {
//   console.log('hello');
// }

// function errorEmitter(): never {
//   while(true) {}
// }

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
  return first;
}

const total = add({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
