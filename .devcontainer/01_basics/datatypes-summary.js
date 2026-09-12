// primitive

// 7 types of primitive : string, Number, Boolean, Null,Undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const ousideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')


console.log(id === anotherId);

const bigNumber = 345433565654544n



// Reference(Non primitive)

//Array, objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


// https://262.ecma-international.org/5.1/#sec-11.4.3



//---------------MEMORY-----------------------------

//-------------TWO TYPES-----------------------------

// 1)stack memory. 2)heap memory.
// stack memory :- usko kehte h jisme primitive use ho
// heap memory :- usko kete h jisme non primitive use ho

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
