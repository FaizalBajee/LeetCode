function x() {
    let a = 10;
    function d() {
        console.log(a);
    }
    a = 500;
    return d;
}
var z = x();
z(); //500

//inner funtion have a access to the outfunction