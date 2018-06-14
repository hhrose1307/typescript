"use strict";
const h = {
    name: 'x',
    age: 10,
    school: {
        name: '1',
        address: '1'
    }
};
const i = {
    name: 'x',
    age: 10
};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
class Octopus {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
const a = new Octopus('x');
console.log(a.name);
//Abject
class Person4 {
}
class Student extends Person4 {
    speak() {
        console.log('Hello');
    }
    learn() {
        console.log('abc');
    }
}
const hvh = new Student();
hvh.speak();
