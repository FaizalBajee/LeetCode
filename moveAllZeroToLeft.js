function moveLeft(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] == 0) {
                if (nums[j] !== 0) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
    }
    console.log(nums)
}
arr=[0,4,5,0,4,0,0,0,0,2,0]
moveLeft(arr);