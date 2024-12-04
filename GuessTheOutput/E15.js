setTimeout(() => console.log(1), 0); //5
console.log(2); //1
new Promise(res => {
    console.log(3) //2
    res();
}).then(() => console.log(4)); //4
console.log(5); //3
// 2
// 3
// 5
// 4
// 1