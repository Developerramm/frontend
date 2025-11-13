console.log("javascript inheritance ");

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }

  fly() {
    console.log("Flying");
  }

  getColor() {
    return this.color;
  }
}

let birs = new Bird(4, "red");
birs.fly();
birs.walk();
console.log(birs.getColor());
