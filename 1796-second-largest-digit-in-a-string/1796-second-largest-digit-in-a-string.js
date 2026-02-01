/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
       const digits = new Set();

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            digits.add(Number(ch)); 
        }
    }

    const arr = [...digits].sort((a, b) => b - a);

    return arr.length >= 2 ? arr[1] : -1;
};