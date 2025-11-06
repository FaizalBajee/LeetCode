//findDupInArray.js
// You are given an array of numbers where some numbers appear twice, and some appear once.
//Write a function to return an array of duplicate numbers in the given array.

let array = [4, 3, 2, 7, 8, 2, 3, 2, 1];

function findDup(arr) {
  let array = [];
  let dup = [];
  for (let i = 0; i < arr.length; i++) {
    if (array.includes(arr[i])) {
      dup.push(arr[i]);
    }
    array.push(arr[i]);
  }
  //   console.log(array)
  //   console.log(dup)
  return [...new Set(dup)];
}

// findDup(array)
console.log(findDup(array)); // Convert Set to Array
