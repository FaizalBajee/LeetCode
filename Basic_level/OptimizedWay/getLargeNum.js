//1st methord
function getlarge(nums) {
    // console.log(nums);
    let large = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > large) {
            large = nums[i];
        }
    }
    return large;
}
arr = [0, 4, 5, 0, 44, 0, 23, 0, 0, 2, 0];

console.log(getlarge(arr));

//2nd methord