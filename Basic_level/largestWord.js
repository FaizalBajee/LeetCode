// let str = "hi1111111111111111111 faizal bajee happy coding11";
// let arr = str.split(" ")
// let ans = arr.reduce((largest, currect) => currect.length > largest.length ? currect : largest, "");
// console.log(ans)

function largest(word) {
    let arr = word.split(" ");
    let largest = '';
    for (let i = 0; i < arr.length; i++) {
        if (largest.length < arr[i].length) {
            largest = arr[i];
        }
    }
    return largest;
}
let str = largest("hi faizal bajee happy coding11")
console.log(str)

