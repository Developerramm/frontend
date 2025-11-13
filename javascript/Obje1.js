console.log("Object destructuring...")
let person = {
    firstName : "John",
    lastName : "Doe"
}

console.table(person)

let fName = person.firstName;
let lname = person.lastName;

console.log(fName, lname)


// let {a,b} = person;
// console.log(a)
// console.log(b)

let {firstName : a, lastName : b} = person;

console.log(a)
console.log(b)

// ({firstName, lastName} = person);


let {firstName,lastName} = person;
console.log(person)
console.log(firstName)
console.log(lastName)


