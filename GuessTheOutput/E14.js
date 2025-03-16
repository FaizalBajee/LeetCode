let a = true;

number = 0

setTimeout(() => {
    a = false;
}, 1000)

while (a) {
    console.log(' -- inside whilee -- ' + number++ + a);
}
