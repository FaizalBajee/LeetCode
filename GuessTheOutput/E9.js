// This code prints 6 everytime. How to print 1,2,3,4,5,6 ? .*. 
function x() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }

}
x(); 
//work on process
