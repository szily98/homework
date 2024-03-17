/*write a function that can take in any number of arguments, and returns the sum of all of the arguments*/

function sumOfArguments(...args) {
  if (args.length === 0) {
    return 0;
  }

  const sum = args.reduce((total, current) => total + current, 0);

  return sum;
}

console.log(sumOfArguments(1, 2, 3));
console.log(sumOfArguments(5, 15, 30, 20));
console.log(sumOfArguments());

/*write a function that can take in any number of arguments (including numbers or strings), 
and returns the sum of only the numbers*/

function sumOfNumbers() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number" && !isNaN(arguments[i])) {
      sum += arguments[i];
    }
  }

  return sum;
}

console.log(sumOfNumbers(1, 2, 3));
console.log(sumOfNumbers(2, "3", "abc"));
console.log(sumOfNumbers());

/*write a function that takes in two arrays as arguments, 
and returns a single array that combines both (using the spread operator)*/

function combineArrays(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];
  return combinedArray;
}

const array1 = [1, 2, 3];
const combined = combineArrays(array1, array2);
console.log(combined);

/*write a function that takes in any amount of arguments, and return the sum of every other argument*/

function sumEveryOther() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i += 2) {
    sum += arguments[i];
  }
  return sum;
}

const result = sumEveryOther(1, 2, 3, 4, 5, 6);
console.log(result);

/*write a function that take in any number of arguments, and returns a single array of only the unique arguments*/

function uniqueArgs(...args) {
  const uniqueArray = [];
  for (let arg of args) {
    if (!uniqueArray.includes(arg)) {
      uniqueArray.push(arg);
    }
  }
  return uniqueArray;
}

const uniqueArray = uniqueArgs(1, 2, 3, 3, 4, 4, 5, 5);
console.log(uniqueArray);

/*write a function that take in any number of arrays as arguments, and combines all of them into one array*/

function togetherArrays(...arrays) {
  return [].concat(...arrays);
}

const together = togetherArrays([1, 2, 3], ["a", "b", "c"], [true, false]);
console.log(combined);
