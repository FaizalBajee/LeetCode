// binary.js

// The Binary Search Algorithm can be implemented in the following two ways

// Iterative Binary Search Algorithm
// Recursive Binary Search Algorithm

// Iterative Binary Search Algorithm
function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) high = mid - 1;
    // Else the element can only be present
    // in right subarray
    else low = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
}

// Driver Code
arr = new Array(2, 3, 4, 10, 40);
x = 10;
result = binarySearch(arr, x);
if (result == -1) console.log("Element is not present in array");
else console.log("Element is present at index " + result);


// Recursive Binary Search Algorithm

// A recursive binary search function. It returns
// location of x in given array arr[low..high] is present,
// otherwise -1
function binarySearch(arr, low, high, x) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, high, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

// Driver Code
let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
if (result == -1)
    console.log("Element is not present in array");
else
    console.log("Element is present at index " + result);