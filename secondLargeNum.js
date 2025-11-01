// secondLargeNum.js
function getSecondlarge(nums) {
  nums.sort();
  console.log(nums);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (arr[nums.length - 1] !== arr[i]) {
      return arr[i];
    }
  }
  return -1;
}
arr = [0, 4, 5, 0, 4, 9, 7, 9, 0, 9, 9];
// getSecondlarge(arr)
console.log(getSecondlarge(arr));
