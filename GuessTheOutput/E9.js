// This code prints 6 everytime. How to print 1,2,3,4,5,6 ? .*. 
// function x() {

//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }
// x();
//Solution
function x(i) {
    // console.log(i)
    function closure() {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
    return closure();
}
for (i = 1; i <= 5; i++) {
    x(i);
}

//This happens because each iteration of the loop calls closur with a different value of i , 
//and each setTimeout inside closur is set to log that value after i seconds.
