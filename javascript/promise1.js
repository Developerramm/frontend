console.log("promise ");

function getUsers() {
  return [
    { username: "john", email: "john@test.com" },
    { username: "jane", email: "jane@test.com" },
  ];
}

function findUser(username) {
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

let user = findUser("jane");
console.log(user);

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 1000);
});

p.then((result) => {
  console.log(result);
  return result * 10;
})

  .then((result1) => {
    console.log(result1);
    return result1 * 20;
  })
  .then((result3) => {
    console.log(result3);
  });
