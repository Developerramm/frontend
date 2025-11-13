let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "woof" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " say " + this.sound);
};

say.apply(cat, ["What does a cat say ?"]);
say.apply(dog, ["What does a dog say ?"]);

console.log("____________________________");

say.call(cat, "meow");
say.call(dog, "bark");

let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " Km/h");
  },
};

let aircraft = {
  speed: 10,
  fly: function () {
    console.log("flying");
  },
};

let taxiing = car.start.bind(aircraft);
taxiing();



function makeCounter() {
  let count = 0; // variable in the outer scope

  return function () {
    count++; // inner function uses outer variable
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
