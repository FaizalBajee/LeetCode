var twoSum = function(nums, target) {
    for(let i= 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            console.log(nums[i] ,nums[j])
            if(nums[i] + nums[j] == target){
                console.log("true",i,j)
            }
        }
    }

};
let arr = [3,5,8,11,1,-1,7];
twoSum(arr, 10);