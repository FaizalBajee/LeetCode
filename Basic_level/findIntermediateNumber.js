const arr1 = [1, 2, 2];
const arr2 = [1, 5, 0];
const newArr = [...arr1, ...arr2];

left = 0;
right = newArr.length - 1;

for (i = 0; i < newArr.length; i++) {
    // console.log("Index : " + i)
    if (left === right) {
        console.log("Value : " + newArr[i] + "  index : " + i)
    } else {
        if (left + 1 === right) {
            console.log((newArr[left] + newArr[right]) / 2)
        }
    }
    left++;
    right--;
}

// newArr.map((value, index) => {
//     if (left === right) {
//         console.log("Value : " + value + "  index : " + index)
//     }
//     else if (left + 1 === right) {
//         console.log((newArr[left] + newArr[right]) / 2)
//     }
//     left++;
//     right--;
// })
