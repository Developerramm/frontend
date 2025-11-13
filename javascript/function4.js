console.log(" Hello world ");

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }

  return total;
}

let result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

let combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("Javascript", "Rest", "parameters");
console.log(message);

function filter(numbers) {
  let result = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      result.push(number);
    }
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 29, 34, 34, 23, 53, 24];
console.log(filter(numbers));

function isOdd(number) {
  return number % 2 != 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function getFilterNumber(numbers, fn) {
  let result = [];
  for (const number of numbers) {
    if (fn(number)) {
      result.push(number);
    }
  }

  return result;
}

console.log(getFilterNumber(numbers, isOdd));
console.log(getFilterNumber(numbers, isEven));
