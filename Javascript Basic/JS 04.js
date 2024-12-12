//objects
const stud = {
    gender: "male",
    "full name": "Rohit Sharma",//if the key is more than one word then we use double quotes 
    email: "rohit@gmail.com",
    age:18,//for numeric value we don't need double quotes
    location: "Ghaziabad",
    logindays: ["Sat", "Sun", "Tues"],
    islogin: true,
};//anything in curly braces is an object

// console.log(stud);
// console.log(typeof stud);
// stud.name = "Rohit Sharma";
// console.log(stud);
// console.table(stud);
// console.log(stud.age);
// console.log(stud[ "full name"]);
// console.log(stud["email"]);
console.log(stud["full name"]);
if (!stud.islogin) {
    console.log(stud.logindays)
}//in anything except false , null is true in javascript
// if (stud.mobile) {
//     console.log("mobile is given")
// }undefined
if (stud.email) {
    console.log(stud.email)
}
let t1 = {}//if we use ; in place of {} it will treated as undefined
if (t1) {
    console.log("t1 hai");
}

// [==]-> comapre only value
// [===]-> compare value and type
stud.greeting=()=>console.log("hello");
stud.greeting()
const findsum = (...num)=> {
    console.log(num);
    
}
findsum(5, 200);
findsum(5, 200, 10, 11, 12);
findsum();

const print = (stud) => console.log(stud);
print(stud);
//IIFE -> Immediately invoked function expression

    (() => {
        console.log("I am IIFE");
    
    }
)();










