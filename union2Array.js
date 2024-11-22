// function union(a, b) {
//     console.log(a);
//     console.log(b);
//     let arr = [...a];
//     for (let i = 0; i < b.length; i++) {
//         if (!arr.includes(b[i])) {
//             arr.push(b[i])
//         }
//     }
//     return arr;
// }
// a = [1, 2, 3, 4, 5, 6];
// b = [1, 2, 3];
// console.log(union(a, b));
var mergeTwoLists = function (list1, list2) {
    let arr = [...list1,...list2];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
a = [1, 2, 3, 4, 5, 6];
b = [1, 2, 3];
console.log(mergeTwoLists(a, b));