'use strict';

function max(numbers) {
  let i = 0;
  let num = numbers[0];
  while (i < numbers.length) {
    if (num < numbers[i]) {
      num = numbers[i];
    }
    i++;
  }
  return num;
}

console.log(max([1,2,3,2]));