'use strict';

function repeat(fn, n) {
  for (let i=0; i<n; i++) {
    fn();
  }
  
}
function hello() {
  console.log('Hello World');
}
function goodbye() {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  let newArray = [];
  for (let i=0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado Detected');
const lightningStorm = hazardWarningCreator('Lightning Storm Detected');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
tornadoWarning('Main St');
lightningStorm('1st Ave');

const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// const move = turtle.filter(function moveBackwords(arr) {
//   if (arr[0] < 0 || arr[1] < 0) {
//   return false;
//   }
//   return true;
// });

// const newTurtle = move.map(function addMovement(arr1) {
//   return arr1[0] + arr1[1];
// });
// let sum = 0;

// newTurtle.forEach(function(value) {
//   return sum += value;
// }); 

let sum = 0;
const move = turtle.filter(function moveBackwards(arr) {
  return !(arr[0] < 0 || arr[1] < 0);
}).map(function addMovement(arr) {
  return arr[0] + arr[1];
}).forEach(function(value){
  sum += value;
});

console.log(sum);