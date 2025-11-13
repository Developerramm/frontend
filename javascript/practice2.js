let user = {};

Object.defineProperty(user, "name", {
  value: "Ram kumar",
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(user);
console.log(user.name);
user.name = "bob";
console.log(user.name);

// delete user.name;
// console.log(user)
// console.log(user.name)

Object.defineProperty(user, "age", {
  value: 30,
  configurable: false,
  writable: false,
  enumerable: false,
});

console.log(user);
console.log(user.age);
user.age = 20;
console.log(user);

delete user.age;
console.log(user);
console.log(user.age);

user.gender = "male";
user.address = "sitamarhi";

for (let property in user) {
  console.log(property);
}

let person = {
  firstName: "Ram",
  lastName: "Kumar Singh ",
};

Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format";
    }
  },
});

console.log(person.fullName);


let product = {};

Object.defineProperties(product,{
    name : {
        value : "Smartphone"
    },
    price : {
        value : 799
    },
    tax : {
        value : 0.1
    },
    netPrice : {
        get : function(){
            return this.price * (1 + this.tax);
        }
    }
})

console.log(product);

console.log(Object.getOwnPropertyDescriptor(product,"name")) 
