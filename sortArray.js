function sortArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            console.log(nums)
        }
    }
    return nums
}
arr = [10, 2, 5];
console.log(sortArray(arr));