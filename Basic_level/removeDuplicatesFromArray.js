//methord 1
function removeDuplicates(nums) {
    let uniqe = [];
    for (let i = 0; i < nums.length; i++) {
        if (!uniqe.includes(nums[i])) {
            uniqe.push(nums[i]);
        }
    }
    console.log(uniqe)
}
arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr);

//methord 2
// var removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] == nums[j]) {
//                 nums.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     console.log(nums) ;
// };
// arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// removeDuplicates(arr);
// console.log(arr);

