//moveZerosToLeft.js

//o(n)
function moveZerosToLeft(arr) {
    let writeIndex = arr.length - 1;

    // Move non-zero elements to the right
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[writeIndex] = arr[i];
            writeIndex--;
        }
    }

    // Fill remaining positions with 0
    while (writeIndex >= 0) {
        arr[writeIndex] = 0;
        writeIndex--;
    }

    return arr;
}

const arr = [1, 2, 3, 0];
console.log(moveZerosToLeft(arr));

// -----------------------------------------------------------

//o(n2)
// const arr = [1, 2, 3, 0]

function moveZeros(arr) {
    try {
        console.log(arr)
        for (let i = arr.length - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--) {
                if (arr[i] == 0) {
                    console.log(arr[i], arr[j])
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        console.log(arr)
    } catch (error) {
        console.log({ error })
    }
}

moveZeros(arr)