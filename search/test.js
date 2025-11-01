arr = [2, 3, 4, 10, 40];
x = 2;

// Iterative Binary Search Algorithm
function binarySearch1(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log({ low, high }, arr[mid]);
    if (arr[mid] == x) {
      console.log("Index of x :", mid);
      return;
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else if (x < arr[mid]) {
      high = mid - 1;
    }
  }
  console.log("Element not found");
  return -1;
}

// binarySearch1(arr, x);

// Recursive Binary Search Algorithm
function binarySearch2(arr, x, low, high) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) {
      console.log("Index of x :", mid);
      return;
    } else if (arr[mid] < x) {
      return binarySearch2(arr, x, mid + 1, high);
    } else if (arr[mid] > x) {
      return binarySearch2(arr, x, low, mid - 1);
    }
  }
  console.log("Element not found");
  return -1;
}

binarySearch2(arr, x, 0, arr.length - 1);
