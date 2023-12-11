const obj1 = {a: true};

const obj2= obj1;

obj1.a="booya";

console.log('1',obj1);
console.log('2',obj2);

// ..................

let obj3 = {a: true};

let obj4= obj3;

delete obj3;

console.log('2',obj4);

// ..................

let obj5 = {a: true};

let obj6= obj5;

delete obj5;

obj6="oops";

console.log('2',obj6);