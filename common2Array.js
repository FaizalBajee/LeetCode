function common(a, b) {
    console.log(a);
    console.log(b);
    let arr = [];
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            arr.push(b[i])
        }
    }
    return arr;
}
a = [1, 2, 3, 4, 5, 6];
b = [1, 2, 3];
console.log(common(a, b));