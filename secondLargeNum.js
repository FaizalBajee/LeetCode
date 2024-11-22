function getSecondlarge(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                return nums[j]
            }
        }
        return -1;
    }
}
arr = [0, 4, 5, 0, 4, 9, 7, 0, 0, 2, 0]
// getSecondlarge(arr)
console.log(getSecondlarge(arr));