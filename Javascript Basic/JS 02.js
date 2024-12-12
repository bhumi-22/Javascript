// symbols always return unique value
let a = Symbol(10);
console.log(a);
let b = Symbol(10);
console.log(b);
console.log(a === b);
console.log(a == b);
console.log(typeof a);
console.log(typeof b);
let studs = ["abc", "def", "ghi",false,23.14,undefined];
console.log(studs);
console.log(typeof studs);
console.table(studs);
console.log(studs[1]);
console.log(studs[-2]);//not work with negative indexing
studs.push("Ram");//append at last
console.log(studs);
studs.unshift("Shyam");//append at first
console.log(studs);
studs.pop();//remove from last
console.log(studs);
studs.shift();//remove from first
console.log(studs);
console.log(studs.includes('abc'));//returns true or false
console.log(studs.indexOf("abc"));//returns index
const abc = studs.join();
console.log(abc);












