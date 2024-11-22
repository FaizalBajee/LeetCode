function reverse(nums) {
    console.log(nums)
    low = 0;
    high = nums.length - 1;
    for (let i = 0; i < nums.length / 2; i++) {
        let temp = nums[low];
        nums[low] = nums[high];
        nums[high] = temp;
        low++;
        high--;
    }
    return nums;
}
nums = [2, 6, 8, 9, 1]
console.log(reverse(nums))
