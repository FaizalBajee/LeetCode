//rotateArray.js

// Array after k Rotations
// Given an array arr[] and an integer k, rotate the array in place k times to the right (clockwise).
//  In each rotation, the last element moves to the front, and all other elements shift one position
// to the right. Modify the array in place, do not return anything.

//Method 1 - Using Recursion

//to right
function rotateclockwise(arr, k) {
  console.log(arr);
  if (k == 0) {
    return;
  }
  let n = arr.length;
  temp = arr[n - 1];
  //   count = 0;
  for (let i = n - 1; i > 0; i--) {
    // console.log(++count);
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;

  rotateclockwise(arr, k - 1);

  console.log(arr);
}

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 2;
// rotateclockwise(arr, k);
// console.log(arr.join(" "));

//Using Recursion

//to left
function rotateAnticlockwise(arr, k) {
  console.log("initial array" + arr);
  if (k == 0) return;
  n = arr.length;
  temp = arr[0];
  for (i = 0; i < n; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  rotateAnticlockwise(arr, k - 1);

  console.log("final array" + arr);
}

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 3;
// rotateAnticlockwise(arr, k);
// console.log(arr.join(" "));

//methord 2 (best practice) ✅

function rotateClockwise2(arr, k) {
  // k = k % n; - if k is more then 2 digit
  n = arr.length; //6
  temp = [];
  for (i = 0; i < n; i++) {
    if (i < k) {
      temp.push(arr[n + i - k]);
    } else {
      temp.push(arr[n - k + i - n]); //own🚀
    }
  }
  return temp;

  //   console.log("final  : " + temp);
}

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 3;
// console.log(rotateClockwise2(arr, k));
// console.log(arr.join(" "));

// #left

function rotateLeft(arr, k) {
  let n = arr.length;
  let temp = [];

  for (let i = 0; i < n; i++) {
    if (i >= k) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i <  k; i++) {
    temp.push(arr[i]);
  }

  console.log(temp);
}

let arr = [1, 2, 3, 4, 5, 6];
let k = 3;
rotateLeft(arr, k);

//method - 3

//Don’t rely on one method for every problem — forget the old one and choose the best method for the current problem
function method3(arr, k) {
  //   console.log(arr);
  let n = arr.length;
  let helperHouse = [];
  //working but not a good practice (swap func)
  function swap(initial, k) {
    for (let i = initial; i > 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (j >= k) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  function archerSwap(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  archerSwap(arr, k, n - 1);
  archerSwap(arr, 0, k - 1);
  archerSwap(arr, 0, n - 1);

  console.log(arr);
}

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 3;
// method3(arr, k);

// #left
