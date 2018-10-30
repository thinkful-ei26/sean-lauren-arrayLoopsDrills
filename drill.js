'use strict';

function max(numbers) {
  let i = 1;
  let num = numbers[0];
  while (i < numbers.length) {
    if (num < numbers[i]) {
      num = numbers[i];
    }
    i++;
  }
  return num;
}

function min(numbers) {
  let i = 1;
  let num = numbers[0];
  while (i < numbers.length) {
    if (num > numbers[i]) {
      num = numbers[i];
    }
    i++;
  }
  return num;
}

console.log(max([1,2,3,2]));
console.log(min([2,3,5,4]));

function average(numbers) {
  let sum = 0;
  numbers.forEach(function(value) {
    sum += value;
  }); 
  return sum / numbers.length;
}

console.log(average([2,2,3,4]));