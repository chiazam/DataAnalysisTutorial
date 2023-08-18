// reference 

[] === [] // false
{ } === {} // false
let obj1 = { v: 1 };
let obj2 = obj1;
let obj3 = { v: 1 };
obj2 === obj1;//true
obj3 === obj1// false
obj1.v = 1.5
obj2.v // 1.5
obj3.v // 1


// context vs scope

//  e.g for scope

let v = () => {

    let m = 3;

    // "m" only exist in this functions scope;

    console.log(m)//3
}

console.log(m)//throws exception

//  e.g for context

console.log(this)//window

let obj4 = {

    "z": () => {
        console.log(this)//obj4
    }

}

// instantiation

class Gee {

    constructor(name, type) {

        this.name = name;
        this.type = type;

    }

    intro() {

        console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);

    }

}

class Wiz extends Gee {

    constructor(name, type) {

        super(name, type);

    }

    play() {

        console.log(`WEEEEE!!!!, I'm a ${this.type}`);

    }

}

let wiz1 = new Wiz("wizzy", "singer");

let wiz2 = new Wiz("obo", "singer");