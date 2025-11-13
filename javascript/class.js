console.log("class in javascript ");

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let person1 = new Person("Ram kumar");
console.log(person1)
console.log(person1.getName())

console.log(person1.name);

console.log(typeof person1)
console.log(typeof Person)

console.log(person1 instanceof Person)
console.log(person1 instanceof Object)
