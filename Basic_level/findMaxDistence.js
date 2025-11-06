//Find max distences between elements 
const arr = [1, 2, 4, 8, 9, 10];
maxDistence = 0;
value1 = null;
value2 = null;

for (i = 0; i < arr.length - 1; i++) {

    distence = arr[i + 1] - arr[i];

    if (distence > maxDistence) {
        maxDistence = distence;
        value1 = arr[i];
        value2 = arr[i + 1]
    }
}

console.log(`Max distence is ${maxDistence} between ${value1} and ${value2}`)