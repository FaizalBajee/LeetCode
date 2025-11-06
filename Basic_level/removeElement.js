var removeElement = function (nums, val) {
    console.log(nums)
    let arr = [...nums];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == val){
            arr.splice(i,1)
        }
    }
    console.log(arr);
};

a = [3,2,2,3];
b = 3;
removeElement(a, b)