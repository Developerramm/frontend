console.log("Function ");

// function add(x,y){
//     return x + y;
// }

// console.log(add.length)
// console.log(add.prototype)

function add(x, y) {
  console.log(new.target);
  if (new.target) {
    throw "The add function cannot be called as constructor ";
  }
  return x + y;
}

let result = add(10, 30);
console.log(result);
let obj = new add(10, 20);
console.log(obj);
