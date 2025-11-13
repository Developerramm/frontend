
console.log("javascript practice ")

let name = "Ram kumar";
console.log(name.length)

console.log(typeof name)

let person = {
    firstname : "ram",
    lastname : "kumar",
}

console.log(person)
console.log(person.firstname)
console.log(person.lastname)

person.age = 30;
console.log(person)

delete person.lastname
console.log(person)

let employee = {
    firstname : "Pooji",
    lastname : "kumari",
    employeeId : 13007
};

console.log(employee)

console.table(employee)

console.log("firstname" in employee)
console.log("ram" in employee)

console.log("lastname" in employee)

console.log(person)

console.log("age" in person)
console.log("lastname" in person)

person.age = person.age + 10;
console.table(person)

let colors = ["red","green","blue"];
console.log(colors)

for(color of colors){
    console.log(color)
}

console.log("--------------------------------------")

colors.forEach(item=>{
    console.log(item)
})

console.log(window.localStorage)

console.log(colors.length)
for(let i = 0; i<colors.length; i++){
    console.log("----------------------")
    console.log(colors[i])
    console.log("-------------------------")
}


colors.push("oragen")
console.table(colors)
