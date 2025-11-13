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

console.log("*******************************************");

function getUser(id) {
  if (id <= 0) {
    return null;
  }

  return {
    id: id,
    username: "Ram kumar",
    profile: {
      avatar: "avatar.jpb",
      language: "Hindi",
    },
  };
}

let user = getUser(1);
console.log(user);

let profile = user && user.profile;
console.log(profile);

let p1 = user?.profile;
console.log(p1)


let user1 = getUser(0);
// console.log(user1.profile)

console.log(user1?.profile)
console.log(user1 && profile)
