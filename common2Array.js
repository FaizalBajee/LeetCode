//common2Array.js


function common(a, b) {
    let array=[];
    for(let i=0 ; i < a.length ; i++){
        if(b.includes(a[i])){
            array.push(a[i]);
        }
    }
    return array
}
b = [1, 2, 3, 4, 5, 6];
a = [1, 2, 3];
console.log(common(a, b));