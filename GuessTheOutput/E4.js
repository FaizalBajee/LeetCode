const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p == q;
let isStartEqual = p === q;
console.log(typeof (p) === typeof (q))//false,false
//when we compare 2 objects with == , === .
//Even its property and values are equel it reference memory is different so its false