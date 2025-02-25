//findDupInArray.js
// You are given an array of numbers where some numbers appear twice, and some appear once.
//Write a function to return an array of duplicate numbers in the given array.

let array = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(array)

dup = [];

for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            dup.push(array[j])
        }
    }
}
console.log(dup)

//methord 2

let array1 = [4, 3, 2, 7, 8, 2, 3, 1];

let seen = new Set();
let dup = new Set(); 

for (let num of array) {
    if (seen.has(num)) {
        dup.add(num); // Add to duplicates if already seen
    }
    seen.add(num); // Mark as seen
}

console.log([...dup]); // Convert Set to Array

