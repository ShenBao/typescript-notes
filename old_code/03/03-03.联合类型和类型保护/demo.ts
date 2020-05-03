interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

// 类型断言的方式
// function trainAnial(animal: Bird | Dog) {
//     if (animal.fly) {
//         (animal as Bird).sing();
//     } else {
//         (animal as Dog).bark();
//     }
// }

// in 语法做类型保护
function trainAnial(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.bark();
    }
}

// typeof
// function add(first: string | number, second: string | number){
//     if (typeof first === 'string' || typeof second === 'string') {
//         return `${first}${first}`;
//     }
//     return first + second;
// }


// instanceof
class NumberObj {
    count: number;
}

function add (first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}

