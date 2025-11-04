let car = {
  brand: "Honda",
  start: function () {
    console.log(this.brand + " is starting");
  },

  getBrand : function(){
    return this.brand;
  }
};

car.start();

console.log(this === window)

console.log(car.getBrand())

let brand = car.getBrand();
console.log(brand)

let brand1 = car.getBrand.bind(car);
console.log(brand1())

let bike = {
    brand : "Harley Devidson"
}

brand = car.getBrand.bind(bike);
console.log(brand())