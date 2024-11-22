// var isPalindrome = function(x) {
//     let rev=x.toString().split('').reverse().join('');
//     console.log(rev)
//     if(x == rev){
//         return true;
//     }
//     return false
// };
function isPalindrome(num) {
    let x = num.toString()
    low = 0;
    high = x.length - 1;
    for (let i = 0; i < x.length / 2; i++) {
        if (x[low] !== x[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
}
// isPalindrome(12231)
console.log(isPalindrome(4334))
//first want to check failure cases 