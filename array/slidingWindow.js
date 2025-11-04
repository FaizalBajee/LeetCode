//slidingWindow.js

// Method - 1

function maxSum(arr, k) {
  let archer = 0;
  let n = arr.length;
  let castle = [];
  for (let i = 0; i < n - k + 1; i++) {
    currentValue = 0;
    for (let j = 0; j < k; j++) {
      currentValue += arr[j + i];
    }
    if (currentValue > archer) {
      archer = currentValue;
      castle = arr.slice(i, i + k);
    }
    // archer = Math.max(currentValue, archer);
  }
  console.log({ castle, archer });
  //   return archer;
}

// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;
// console.log(maxSum(arr, k));
// maxSum(arr, k);

//methord - 2 ✅

function slidingWindow(arr, k) {
  let slidingWindow = 0;
  for (let i = 0; i < k; i++) {
    slidingWindow += arr[i];
  }
  //   console.log(slidingWindow);
  let max_value = slidingWindow;

  for (let i = k; i < arr.length; i++) {
    value = slidingWindow - arr[i - k] + arr[i];
    max_value = Math.max(max_value, value);
  }
  console.log(slidingWindow);
}
// const arr = [5, 2, -1, 0, 3];
// const k = 3;
// slidingWindow(arr, k);

//#
