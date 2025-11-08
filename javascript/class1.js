
console.log("class expression")

let Person = class {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


let person1 = new Person("ram kumar");
console.log(person1)
console.log(person1.name)
console.log(person1.getName())


const createObject = (key,value) =>{
    return {
        [key] : value,
    }
}

const p1 = createObject("name","ram kumar");
console.log(p1)
const p2 = createObject("name","pooja das");
console.log(p2)
const p3 = createObject("name","rohan");
console.log(p3);


function Animal(legs){
    this.legs = legs;
}

Animal.prototype.walk = function(){
    console.log("Walking on " + this.legs + " legs");
}

function Bird(legs){
    Animal.call(this,legs);
}