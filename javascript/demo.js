// var x  = 10;
var y = 20;

let x = 30;
console.log(x)


let a = 20, b = 30;

function divide(a,b){
    if(b == 0){
        throw "division by zero";
    }

    return a / b;
}

console.log(divide(a,b))
console.log(divide(1,100));
// console.log(divide(10,0))

let items = [1,2,3,4,5];
console.log(items)

for(let i = 0; i<items.length; i++){
    console.log(items[i]);
}

console.log("_____________________________________")

for(let item of items)
    console.log(item * 10)

console.log("----------------------------------------");