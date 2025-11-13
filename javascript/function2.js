console.log("function method here below ");

let userDetails = {
  name: "Ram kumar",
  age: 29,
  Designation: "Developer",
  printDetails: function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
    console.log(this.Designation);
  },
};

userDetails.printDetails();

let getUserDetails = function (state, country) {
  console.log("*****************************");
  console.log(country);
  console.log(state);
  console.log(this.name);
  console.log(this.age);
  console.log(this.Designation);
  console.log("********************************");
};

console.log("-------------------------------");
console.log("-------------------------------");

let userDetails2 = {
  name: "Ayush Matre",
  age: 29,
  Designation: "Web Developer",
};

userDetails.printDetails.call(userDetails2);

getUserDetails.call(userDetails, "Bihar", "India");
getUserDetails.call(userDetails2, "NCR", "Delhi");
