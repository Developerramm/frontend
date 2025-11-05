function getPerson() {
  return null;
}

console.log(getPerson());

// let {demovar }= getPerson();
// console.log(demovar)

let employee = {
  id: 1001,
  name: {
    firstName: "Ram",
    lastName: "kumar",
  },
};

console.log(employee);
console.table(employee);

let {
  name: { firstName, lastName },
  name,
} = employee;
console.log(firstName);
console.log(lastName);
console.log(name);
