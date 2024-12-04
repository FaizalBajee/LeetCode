const nums = [1, 2, 3, 4, 5, 6, 7];
nums.forEach((n) => {
    if (n % 2 === 0) {
        // break;
    }
    console.log(n);
});
//“break” statement works only loops like for, while, do…while and not for map(), forEach()