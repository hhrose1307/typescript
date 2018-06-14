"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    talk() {
        console.log('Hello, I am ' + this.name);
    }
}
class Cow {
    talk() {
        console.log('Ohhhh');
    }
}
function listen(obj) {
    obj.talk();
}
const p = new Person('Teo');
const c = new Cow();
listen(p);
listen(c);
