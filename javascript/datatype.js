let counter = 120;
console.log(counter)
console.log(typeof(counter))

counter = false;
console.log(counter)
console.log(typeof(counter))

counter = "counter number1";
console.log(counter)
console.log(typeof(counter))

let number;
console.log(number)
console.log(typeof number)

let obj = null;
console.log(obj)
console.log(typeof obj)

console.log(null == undefined)
console.log(null === undefined)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


console.log('a' / 10)

console.log(typeof ('a'/10))


let userName = "ram kumuar maniyari";
console.log(userName)

for(name of userName){
    console.log(name)
}


let contact = {
    firstName: 'ram',
    lastName: 'kumar',
    email: 'ramkumar@example.com',
    phone: '8877994899',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'Bihar',
        country: 'Inida'
    }
}

console.log(contact)
console.table(contact)
