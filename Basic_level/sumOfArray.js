function sum(nums) {
    let first = nums[0];
    for (let i = 1; i < nums.length; i++) {
        first += nums[i]
    }
    return first

}
arr = [10, 2, 5, 3];
console.log(sum(arr));